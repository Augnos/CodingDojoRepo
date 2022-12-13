using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Identity;
using _28_LoginAndRegistration.Models;
namespace _28_LoginAndRegistration.Controllers;

public class HomeController : Controller
{
    // Fields
    private readonly ILogger<HomeController> _logger;
    private MyContext _context;

    // Constructor

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    // Methods
    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

    [SessionCheck]
    [HttpGet("/dashboard")]
    public IActionResult Dashboard()
    {
        // if user not logged in, redirect to index
        return View();
    }

    // [HttpGet("/users/new")]
    // public IActionResult NewUser()
    // {
    //     return View();
    // }

    [HttpPost("users/create")]
    public IActionResult CreateUser(User newUser)
    {
        if (ModelState.IsValid)
        {
            PasswordHasher<User> Hasher = new PasswordHasher<User>();
            newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
            _context.Add(newUser);
            _context.SaveChanges();
            HttpContext.Session.SetInt32("UserId", newUser.UserId);
            HttpContext.Session.SetString("FirstName", newUser.FirstName);
            return RedirectToAction("Dashboard");
        }
        return View("Index");
    }

    [HttpPost("users/login")]
    public IActionResult LoginUser(UserLogin userSubmission)
    {
        if (ModelState.IsValid)
        {
            User? userInDb = _context.Users.FirstOrDefault(u => u.Email == userSubmission.LoginEmail);
            if (userInDb == null)
            {
                ModelState.AddModelError("LoginEmail", "Invalid Email/Password");
                return View("Index");
            }

            PasswordHasher<UserLogin> Hasher = new PasswordHasher<UserLogin>();
            var result = Hasher.VerifyHashedPassword(userSubmission, userInDb.Password, userSubmission.LoginPassword); // Result can be compared to 0 for failure
            if (result == 0)
            {
                ModelState.AddModelError("LoginEmail", "Invalid Email/Password");
                return View("Index");
            }
            HttpContext.Session.SetInt32("UserId", userInDb.UserId);
            HttpContext.Session.SetString("FirstName", userInDb.FirstName);
            return RedirectToAction("Dashboard");
        }
        return View("Index");
    }

    [HttpPost("users/logout")]
    public IActionResult LogoutUser()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }

    // [HttpGet("/users/{id}")]
    // public IActionResult ShowUser(int id)
    // {
    //     User? oneUser = _context.Users.FirstOrDefault(d => d.UserId == id);
    //     return View(oneUser);
    // }

    // [HttpGet("/users/{id}/edit")]
    // public IActionResult EditUser(int id)
    // {
    //     User? oneUser = _context.Users.FirstOrDefault(d => d.UserId == id);
    //     return View(oneUser);
    // }

    // [HttpPost("/users/{id}/update")]
    // public IActionResult UpdateUser(User newUser, int id)
    // {
    //     if (ModelState.IsValid)
    //     {
    //         User? OldUser = _context.Users.FirstOrDefault(d => d.UserId == id);
    //         OldUser.FirstName = newUser.FirstName;
    //         OldUser.LastName = newUser.LastName;
    //         OldUser.Email = newUser.Email;
    //         OldUser.Password = newUser.Password;
    //         OldUser.PasswordConfirm = newUser.PasswordConfirm;
    //         OldUser.UpdatedAt = DateTime.Now;
    //         _context.SaveChanges();
    //         return RedirectToAction("Index");
    //     }
    //     return View("EditUser", newUser);
    // }

    // [HttpPost("/users/{id}/destroy")]
    // public IActionResult DestroyUser(int id)
    // {
    //     User? oneUser = _context.Users.SingleOrDefault(d => d.UserId == id);
    //     _context.Users.Remove(oneUser);
    //     _context.SaveChanges();
    //     return RedirectToAction("Index");
    // }



    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

public class SessionCheckAttribute : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        // Find the session, but remember it may be null so we need int?
        int? userId = context.HttpContext.Session.GetInt32("UserId");
        // Check to see if we got back null
        if (userId == null)
        {
            // Redirect to the Index page if there was nothing in session
            // "Home" here is referring to "HomeController", you can use any controller that is appropriate here
            context.Result = new RedirectToActionResult("Index", "Home", null);
        }
    }
}
