using Microsoft.AspNetCore.Mvc;
namespace Survey.Controllers;
public class SurveyController : Controller
{
    [HttpGet("")]
    public ViewResult Index()
    {
        return View();
    }

    [HttpPost("Process")]
    public IActionResult Process(string name, string location, string language, string comments)
    {
        ViewBag.name = name;
        ViewBag.location = location;
        ViewBag.language = language;
        ViewBag.comments = comments;
        
        return View("Results");
    }
}
