using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using ProductsAndCategories.Models;

namespace ProductsAndCategories.Controllers;

public class ProductController : Controller
{
    // Fields
    private readonly ILogger<ProductController> _logger;
    private MyContext _context;

    // Constructor
    public ProductController(ILogger<ProductController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    // Methods
    [HttpGet("")]
    public IActionResult Index()
    {
        MyViewModel ViewModel = new MyViewModel
        {
            AllProducts = _context.Products.ToList()
        };
        return View("Index", ViewModel);
    }

    // [HttpGet("/products/new")]
    // public IActionResult NewProduct()
    // {
    //     return View();
    // }

    [HttpPost("products/create")]
    public IActionResult CreateProduct(Product newProduct)
    {
        if (ModelState.IsValid)
        {
            _context.Add(newProduct);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        return Index();
    }

    [HttpGet("/products/{id}")]
    public IActionResult ShowProduct(int id)
    {
        MyViewModel ViewModel = new MyViewModel
        {
            Product = _context.Products
                .Include(pca => pca.CategoryList)
                .ThenInclude(pca => pca.Category)
                .FirstOrDefault(product => product.ProductId == id),

            AllCategories = _context.Categories
                .Include(pca => pca.ProductList)
                .ThenInclude(pca => pca.Product)
                .ToList()
        };
        return View("ShowProduct", ViewModel);
    }

    [HttpGet("/products/{id}/edit")]
    public IActionResult EditProduct(int id)
    {
        Product? oneProduct = _context.Products.FirstOrDefault(d => d.ProductId == id);
        return View("EditProduct", oneProduct);
    }

    [HttpPost("/products/{id}/update")]
    public IActionResult UpdateProduct(Product newProduct, int id)
    {
        if (ModelState.IsValid)
        {
            Product? OldProduct = _context.Products.FirstOrDefault(d => d.ProductId == id);
            OldProduct.Name = newProduct.Name;
            OldProduct.Description = newProduct.Description;
            OldProduct.Price = newProduct.Price;
            OldProduct.UpdatedAt = DateTime.Now;
            _context.SaveChanges();
            return ShowProduct(id);
        }
        return EditProduct(id);
    }

    [HttpPost("/products/{id}/destroy")]
    public IActionResult DestroyProduct(int id)
    {
        Product? oneProduct = _context.Products.SingleOrDefault(d => d.ProductId == id);
        _context.Products.Remove(oneProduct);
        _context.SaveChanges();
        return Index();
    }

    [HttpPost("/products/associations/create")]
    public IActionResult CreateProductAssociation(MyViewModel viewModel)
    {
        Console.WriteLine("********* CategoryId **********");
        Console.WriteLine(viewModel.CategoryId);
        Console.WriteLine("********* ProductId **********");
        Console.WriteLine(viewModel.ProductId);
        Console.WriteLine("********* checking modelstate **********");
        if (viewModel.CategoryId != 0)
        {
            Console.WriteLine("********* modelstate valid **********");
            ProdCatAssn newProdCatAssn = new ProdCatAssn
            {
                ProductId = viewModel.ProductId,
                CategoryId = viewModel.CategoryId
            };
            _context.Add(newProdCatAssn);
            _context.SaveChanges();
            return ShowProduct(viewModel.ProductId);
        }
        Console.WriteLine("********* modelstate invalid **********");
        return ShowProduct(viewModel.ProductId);
    }

    [HttpPost("/products/associations/{id}/destroy")]
    public IActionResult DestroyProdCatAssn(int id, int pcaId)
    {
        ProdCatAssn? oneProdCatAssn = _context.ProdCatAssns.SingleOrDefault(d => d.ProdCatAssnId == pcaId);
        _context.ProdCatAssns.Remove(oneProdCatAssn);
        _context.SaveChanges();
        return ShowProduct(id);
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
