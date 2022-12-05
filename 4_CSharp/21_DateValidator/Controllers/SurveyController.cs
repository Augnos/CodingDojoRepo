#pragma warning disable CS8618
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using _21_DateValidator.Models;

namespace _21_DateValidator.Controllers;

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
        // System.Console.WriteLine(submission.StartDate);
        survey = submission;
        if (ModelState.IsValid) return RedirectToAction("Results");
        else return View("Index");
    }

    [HttpGet("results")]
    public IActionResult Results()
    {
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