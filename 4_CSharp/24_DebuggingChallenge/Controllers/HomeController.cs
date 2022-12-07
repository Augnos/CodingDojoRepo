#pragma warning disable CS8618
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DebuggingChallenge.Models;

namespace DebuggingChallenge.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    // Hint on a few errors: pay close attention to how things are named

    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet("generator")]
    public IActionResult Generator()
    {
        if (!LoggedIn())
        {
            return RedirectToAction("Index");
        }
        if (HttpContext.Session.GetString("Passcode") == null)
        {
            GeneratePasscode();
        }
        return View("Generate");
    }

    [HttpPost("reset")]
    public IActionResult Reset()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }

    [HttpGet("generate/new")]
    public IActionResult GenerateNew()
    {
        if (LoggedIn())
        {
            GeneratePasscode();
            return RedirectToAction("Generator");
        }
        else return RedirectToAction("Index");
    }

    [HttpPost("user/create")]
    public IActionResult CreateUser(User newUser)
    {
        // System.Console.WriteLine(ModelState.IsValid);
        if (ModelState.IsValid)
        {
            System.Console.WriteLine(newUser.Name);
            System.Console.WriteLine(newUser.Location);
            HttpContext.Session.SetString("Username", (string)newUser.Name);
            if (newUser.Location != null)
            {
                HttpContext.Session.SetString("Location", (string)newUser.Location);
            }
            else
            {
                HttpContext.Session.SetString("Location", "Undisclosed");
            }

            System.Console.WriteLine(HttpContext.Session.GetString("Username"));
            System.Console.WriteLine(HttpContext.Session.GetString("Location"));
            return RedirectToAction("generator");
        }
        else
        {
            return View("Index");
        }
    }

    public bool LoggedIn()
    {
        System.Console.WriteLine("Login check...");
        string? username = HttpContext.Session.GetString("Username");
        if (username == null)
        {
            System.Console.WriteLine("Check failed.");
            return false;
        }
        System.Console.WriteLine($"Logged in as {username}.");
        return true;
    }

    public void GeneratePasscode()
    {
        string passcode = "";
        string CharOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        string NumOptions = "0123456789";
        Random rand = new Random();
        for (int i = 1; i < 15; i++)
        {
            int odds = rand.Next(2);
            if (odds == 0)
            {
                passcode += CharOptions[rand.Next(CharOptions.Length)];
            }
            else
            {
                passcode += NumOptions[rand.Next(NumOptions.Length)];
            }
        }
        HttpContext.Session.SetString("Passcode", passcode);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

