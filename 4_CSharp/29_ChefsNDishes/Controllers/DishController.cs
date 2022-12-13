using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using _29_ChefsNDishes.Models;

namespace _29_ChefsNDishes.Controllers;

public class DishController : Controller
{
    // Fields
    private readonly ILogger<DishController> _logger;
    private MyContext _context;

    // Constructor
    public DishController(ILogger<DishController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    // Methods
    [HttpGet("/dishes")]
    public IActionResult Index()
    {
        List<Dish> AllDishes = _context.Dishes
            .Include(d => d.Creator)
            .ToList();
        return View("Index", AllDishes);
    }

    [HttpGet("/dishes/new")]
    public IActionResult NewDish()
    {
        ViewBag.AllChefs = _context.Chefs.ToList();
        return View("NewDish");
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
        return NewDish();
    }

    [HttpGet("/dishes/{id}")]
    public IActionResult ShowDish(int id)
    {
        Dish? oneDish = _context.Dishes.FirstOrDefault(d => d.DishId == id);
        return View("ShowDish", oneDish);
    }

    [HttpGet("/dishes/{id}/edit")]
    public IActionResult EditDish(int id)
    {
        Dish? oneDish = _context.Dishes.FirstOrDefault(d => d.DishId == id);
        return View("EditDish", oneDish);
    }

    [HttpPost("/dishes/{id}/update")]
    public IActionResult UpdateDish(Dish newDish, int id)
    {
        System.Console.WriteLine("Validating model...");
        if (ModelState.IsValid)
        {
            Dish? OldDish = _context.Dishes.FirstOrDefault(d => d.DishId == id);
            OldDish.Name = newDish.Name;
            OldDish.ChefId = newDish.ChefId;
            OldDish.Tastiness = newDish.Tastiness;
            OldDish.Calories = newDish.Calories;
            OldDish.UpdatedAt = DateTime.Now;
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        return EditDish(id);
    }

    [HttpPost("/dishes/{id}/destroy")]
    public IActionResult DestroyDish(int id)
    {
        Dish? oneDish = _context.Dishes.SingleOrDefault(d => d.DishId == id);
        _context.Dishes.Remove(oneDish);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
