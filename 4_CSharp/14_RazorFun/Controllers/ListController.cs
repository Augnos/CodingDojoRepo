using Microsoft.AspNetCore.Mvc;
namespace RazorFun.Controllers;
public class ListController : Controller
{
    [HttpGet]
    [Route("")]
    public ViewResult Index()
    {
        // will attempt to serve 
            // Views/Hello/Index.cshtml
        // or if that file isn't there:
            // Views/Shared/Index.cshtml
        return View();
    }
}