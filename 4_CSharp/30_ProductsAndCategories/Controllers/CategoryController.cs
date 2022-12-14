using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using ProductsAndCategories.Models;

namespace ProductsAndCategories.Controllers;

public class CategoryController : Controller
{
    // Fields
    private readonly ILogger<CategoryController> _logger;
    private MyContext _context;

    // Constructor
    public CategoryController(ILogger<CategoryController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    // Methods
    [HttpGet("/categories")]
    public IActionResult Index()
    {
        MyViewModel ViewModel = new MyViewModel
        {
            AllCategories = _context.Categories.ToList()
        };
        return View("Index", ViewModel);
    }

    // [HttpGet("/categories/new")]
    // public IActionResult NewCategory()
    // {
    //     return View();
    // }

    [HttpPost("categories/create")]
    public IActionResult CreateCategory(Category newCategory)
    {
        if (ModelState.IsValid)
        {
            _context.Add(newCategory);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        return Index();
    }

    [HttpGet("/categories/{id}")]
    public IActionResult ShowCategory(int id)
    {
        MyViewModel ViewModel = new MyViewModel
        {
            Category = _context.Categories
                .Include(pca => pca.ProductList)
                .ThenInclude(pca => pca.Product)
                .FirstOrDefault(category => category.CategoryId == id),

            AllProducts = _context.Products
                .Include(pca => pca.CategoryList)
                .ThenInclude(pca => pca.Category)
                .ToList()
        };
        return View("ShowCategory", ViewModel);
    }

    [HttpGet("/categories/{id}/edit")]
    public IActionResult EditCategory(int id)
    {
        Category? oneCategory = _context.Categories.FirstOrDefault(d => d.CategoryId == id);
        return View("EditCategory", oneCategory);
    }

    [HttpPost("/categories/{id}/update")]
    public IActionResult UpdateCategory(Category newCategory, int id)
    {
        if (ModelState.IsValid)
        {
            Category? OldCategory = _context.Categories.FirstOrDefault(d => d.CategoryId == id);
            OldCategory.Name = newCategory.Name;
            OldCategory.UpdatedAt = DateTime.Now;
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        return View("EditCategory", newCategory);
    }

    [HttpPost("/categories/{id}/destroy")]
    public IActionResult DestroyCategory(int id)
    {
        Category? oneCategory = _context.Categories.SingleOrDefault(d => d.CategoryId == id);
        _context.Categories.Remove(oneCategory);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }

    [HttpPost("/categories/associations/create")]
    public IActionResult CreateCategoryAssociation(MyViewModel viewModel)
    {
        Console.WriteLine("********* CategoryId **********");
        Console.WriteLine(viewModel.CategoryId);
        Console.WriteLine("********* ProductId **********");
        Console.WriteLine(viewModel.ProductId);
        Console.WriteLine("********* checking modelstate **********");
        if (viewModel.ProductId != 0)
        {
            Console.WriteLine("********* modelstate valid **********");
            ProdCatAssn newProdCatAssn = new ProdCatAssn
            {
                ProductId = viewModel.ProductId,
                CategoryId = viewModel.CategoryId
            };
            _context.Add(newProdCatAssn);
            _context.SaveChanges();
            return ShowCategory(viewModel.CategoryId);
        }
        Console.WriteLine("********* modelstate invalid **********");
        return ShowCategory(viewModel.CategoryId);
    }

    [HttpPost("/categories/associations/{id}/destroy")]
    public IActionResult DestroyProdCatAssn(int id, int pcaId)
    {
        ProdCatAssn? oneProdCatAssn = _context.ProdCatAssns.SingleOrDefault(d => d.ProdCatAssnId == pcaId);
        _context.ProdCatAssns.Remove(oneProdCatAssn);
        _context.SaveChanges();
        return ShowCategory(id);
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

// public class SessionCheckAttribute : ActionFilterAttribute
// {
//     public override void OnActionExecuting(ActionExecutingContext context)
//     {
//         // Find the session, but remember it may be null so we need int?
//         int? userId = context.HttpContext.Session.GetInt32("UserId");
//         // Check to see if we got back null
//         if (userId == null)
//         {
//             // Redirect to the Index page if there was nothing in session
//             // "Home" here is referring to "HomeController", you can use any controller that is appropriate here
//             context.Result = new RedirectToActionResult("Index", "Home", null);
//         }
//     }
// }
