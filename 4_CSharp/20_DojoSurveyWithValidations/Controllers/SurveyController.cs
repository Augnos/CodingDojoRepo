#pragma warning disable CS8618
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using _20_DojoSurveyWithValidations.Models;

namespace _20_DojoSurveyWithValidations.Controllers;

public class SurveyController : Controller
{

    static Survey survey;

    private readonly ILogger<SurveyController> _logger;

    public SurveyController(ILogger<SurveyController> logger)
    {
        _logger = logger;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost("process")]
    public IActionResult Process(Survey submission)
    {
        survey = submission;
        ModelState.Remove("ArticleId");
        if (ModelState.IsValid)
        {
            return RedirectToAction("Results");
        }
        else
        {
            return View("Index");
        }
    }

    [HttpGet("results")]
    public IActionResult Results()
    {
        System.Console.WriteLine(survey.Name);
        System.Console.WriteLine(survey.Location);
        System.Console.WriteLine(survey.Language);
        System.Console.WriteLine(survey.Comments);
        return View(survey);
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