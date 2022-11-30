// "using" is our import line
using Microsoft.AspNetCore.Mvc;     // inside every controller we make
namespace FirstWeb.Controllers;
public class HelloController : Controller
{
    // Routing
    // This tells our controller we have a web page we want to see (or GET)
    [HttpGet]
    // What is the url?
    [Route("")]     // goes to localhost:5XXX/
    public string Index()
    {
        return View();
    }

    // localhost:5XXX/user/more
    [HttpGet("user/more")]
    public string User()
    {
        return "Even more information!";
    }

    [HttpGet("user/{id}")]
    public string OneUser(int id)
    {
        return $"This is user {id}";
    }
}

