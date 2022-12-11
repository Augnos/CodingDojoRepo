#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace _28_LoginAndRegistration.Models;
public class UserLogin
{
    // Fields
    [Required(ErrorMessage = "Email is required.")]
    [EmailAddress]
    public string LoginEmail { get; set; }

    [Required(ErrorMessage = "Password is required.")]
    public string LoginPassword { get; set; }
}