#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace DebuggingChallenge.Models;

public class User
{
    [Required]
    public string Name {get;set;}

    public string? Location {get;set;}
}