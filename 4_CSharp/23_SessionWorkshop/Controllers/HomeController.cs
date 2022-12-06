using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using _23_SessionWorkshop.Models;

namespace _23_SessionWorkshop.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet("Dashboard")]
    public IActionResult Dashboard()
    {
        System.Console.WriteLine(HttpContext.Session.GetString("UserName"));
        if (HttpContext.Session.GetString("UserName") == null) return View("Index");
        return View();
    }

    [HttpGet("Logout")]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }

    [HttpPost("Login")]
    public IActionResult Login(User submission)
    {
        if (ModelState.IsValid)
        {
            HttpContext.Session.SetString("UserName", submission.Name);
            HttpContext.Session.SetInt32("Number", 22);
            
            return RedirectToAction("Dashboard");
        }
        else return View("Index");
    }

    [HttpGet("UpdatePlusOne")]
    public IActionResult UpdatePlusOne()
    {
        int? num = HttpContext.Session.GetInt32("Number") + 1;
        HttpContext.Session.SetInt32("Number", (int)num);
        return View("Dashboard");
    }

    [HttpGet("UpdateMinusOne")]
    public IActionResult UpdateMinusOne()
    {
        int? num = HttpContext.Session.GetInt32("Number") - 1;
        HttpContext.Session.SetInt32("Number", (int)num);
        return View("Dashboard");
    }

    [HttpGet("UpdateTimesTwo")]
    public IActionResult UpdateTimesTwo()
    {
        int? num = HttpContext.Session.GetInt32("Number") * 2;
        HttpContext.Session.SetInt32("Number", (int)num);
        return View("Dashboard");
    }

    [HttpGet("UpdatePlusRandom")]
    public IActionResult UpdatePlusRandom()
    {
        Random rand = new Random();
        int? num = HttpContext.Session.GetInt32("Number") + rand.Next(10)+1;
        HttpContext.Session.SetInt32("Number", (int)num);
        return View("Dashboard");
    }

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
