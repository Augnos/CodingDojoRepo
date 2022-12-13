using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using _29_ChefsNDishes.Models;

namespace _29_ChefsNDishes.Controllers;

public class ChefController : Controller
{
    // Fields
    private readonly ILogger<ChefController> _logger;
    private MyContext _context;

    // Constructor
    public ChefController(ILogger<ChefController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    // Methods
    [HttpGet("")]
    public IActionResult Index()
    {
        List<Chef> AllChefs = _context.Chefs.Include(c => c.CreatedDishes).ToList();
        return View(AllChefs);
    }

    [HttpGet("/chefs/new")]
    public IActionResult NewChef()
    {
        return View();
    }

    [HttpPost("chefs/create")]
    public IActionResult CreateChef(Chef newChef)
    {
        if (ModelState.IsValid)
        {
            _context.Add(newChef);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        return View("NewChef");
    }

    [HttpGet("/chefs/{id}")]
    public IActionResult ShowChef(int id)
    {
        Chef? oneChef = _context.Chefs.FirstOrDefault(d => d.ChefId == id);
        return View(oneChef);
    }

    [HttpGet("/chefs/{id}/edit")]
    public IActionResult EditChef(int id)
    {
        Chef? oneChef = _context.Chefs.FirstOrDefault(d => d.ChefId == id);
        return View(oneChef);
    }

    [HttpPost("/chefs/{id}/update")]
    public IActionResult UpdateChef(Chef newChef, int id)
    {
        if (ModelState.IsValid)
        {
            Chef? OldChef = _context.Chefs.FirstOrDefault(d => d.ChefId == id);
            OldChef.FirstName = newChef.FirstName;
            OldChef.LastName = newChef.LastName;
            OldChef.DateOfBirth = newChef.DateOfBirth;
            OldChef.UpdatedAt = DateTime.Now;
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        return View("EditChef", newChef);
    }

    [HttpPost("/chefs/{id}/destroy")]
    public IActionResult DestroyChef(int id)
    {
        Chef? oneChef = _context.Chefs.SingleOrDefault(d => d.ChefId == id);
        _context.Chefs.Remove(oneChef);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }

    [HttpGet("/privacy")]
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
