using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using _18_ViewModelFun.Models;

namespace _18_ViewModelFun.Controllers;

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
        string Message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi eveniet ab nesciunt quod mollitia omnis quaerat voluptas adipisci est reprehenderit ducimus ad officia a rerum impedit, accusantium et repudiandae!";
        return View("Index", Message);
    }

    [HttpGet("Numbers")]
    public IActionResult Numbers()
    {
        List<int> numbers = new List<int>{1, 2, 10, 21, 8, 7, 3};
        return View(numbers);
    }

    [HttpGet("OneUser")]
    public IActionResult OneUser()
    {
        User NeilGalman = new User()
        {
            FirstName = "Neil",
            LastName = "Gaiman"
        };
        return View("OneUser", NeilGalman);
    }

    [HttpGet("Users")]
    public IActionResult Users()
    {
        List<User> authors = new List<User>();
        authors.Add(new User() {FirstName = "Neil",LastName = "Gaiman"});
        authors.Add(new User() {FirstName = "Terry",LastName = "Pratchet"});
        authors.Add(new User() {FirstName = "Jane",LastName = "Austen"});
        authors.Add(new User() {FirstName = "Stephen",LastName = "King"});
        authors.Add(new User() {FirstName = "Mary",LastName = "Shelley"});
        return View("Users", authors);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
