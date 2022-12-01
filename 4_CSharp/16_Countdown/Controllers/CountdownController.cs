using Microsoft.AspNetCore.Mvc;
namespace Portfolio.Controllers;
public class CountdownController : Controller
{
    [HttpGet("")]
    public ViewResult Index()
    {
        return View();
    }
}
