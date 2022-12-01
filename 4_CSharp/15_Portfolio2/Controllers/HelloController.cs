using Microsoft.AspNetCore.Mvc;
namespace Portfolio.Controllers;
public class HelloController : Controller
{
    [HttpGet("")]
    public ViewResult Index()
    {
        return View();
    }

    [HttpGet("projects")]
    public ViewResult Projects()
    {
        return View("Projects");
    }

    [HttpGet("contact")]
    public ViewResult Contact()
    {
        return View("Contact");
    }

}
