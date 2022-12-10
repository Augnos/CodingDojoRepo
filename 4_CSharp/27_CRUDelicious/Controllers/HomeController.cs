using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using _27_CRUDelicious.Models;
namespace _27_CRUDelicious.Controllers;

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
        List<Dish> AllDishes = _context.Dishes.ToList();
        return View(AllDishes);
    }

    [HttpGet("/dishes/new")]
    public IActionResult NewDish()
    {
        return View();
    }

    [HttpPost("dishes/create")]
    public IActionResult CreateDish(Dish newDish)
    {
        if (ModelState.IsValid)
        {
            _context.Add(newDish);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        return View("NewDish");
    }

    [HttpGet("/dishes/{id}")]
    public IActionResult ShowDish(int id)
    {
        Dish? oneDish = _context.Dishes.FirstOrDefault(d => d.DishId == id);
        return View(oneDish);
    }

    [HttpGet("/dishes/{id}/edit")]
    public IActionResult EditDish(int id)
    {
        Dish? oneDish = _context.Dishes.FirstOrDefault(d => d.DishId == id);
        return View(oneDish);
    }

    [HttpPost("/dishes/{id}/update")]
    public IActionResult UpdateDish(Dish newDish, int id)
    {
        if (ModelState.IsValid)
        {
            Dish? OldDish = _context.Dishes.FirstOrDefault(d => d.DishId == id);
            OldDish.Name = newDish.Name;
            OldDish.Chef = newDish.Chef;
            OldDish.Tastiness = newDish.Tastiness;
            OldDish.Calories = newDish.Calories;
            OldDish.Description = newDish.Description;
            OldDish.UpdatedAt = DateTime.Now;
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        return View("EditDish", newDish);
    }

    [HttpPost("/dishes/{id}/destroy")]
    public IActionResult DestroyDish(int id)
    {
        Dish? oneDish = _context.Dishes.SingleOrDefault(d => d.DishId == id);
        _context.Dishes.Remove(oneDish);
        _context.SaveChanges();
        return RedirectToAction("Index");
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
