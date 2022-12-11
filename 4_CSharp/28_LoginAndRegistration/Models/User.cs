#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace _28_LoginAndRegistration.Models;
public class User
{
    // Fields
    [Key]
    public int UserId { get; set; }

    [Required(ErrorMessage = "First name is required.")]
    [MinLength(2, ErrorMessage = "Password must be at least 2 characters")]
    public string FirstName { get; set; }

    [Required(ErrorMessage = "Last name is required.")]
    [MinLength(2, ErrorMessage = "Password must be at least 2 characters")]
    public string LastName { get; set; }

    [Required(ErrorMessage = "Email is required.")]
    [EmailAddress]
    [UniqueEmail]
    public string Email { get; set; }

    [Required(ErrorMessage = "Password is required.")]
    [DataType(DataType.Password)]
    [MinLength(8, ErrorMessage = "Password must be at least 8 characters")]
    public string Password { get; set; }

    [Required(ErrorMessage = "Password confirmation is required.")]
    [NotMapped]
    [Compare("Password", ErrorMessage = "The passwords you entered didn't match.")]
    public string PasswordConfirm { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}


// Custom Attributes
public class UniqueEmailAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        // Though we have Required as a validation, sometimes we make it here anyways
        // In which case we must first verify the value is not null before we proceed
        if (value == null)
        {
            // If it was, return the required error
            return new ValidationResult("Email is required.");
        }

        // This will connect us to our database since we are not in our Controller
        MyContext _context = (MyContext)validationContext.GetService(typeof(MyContext));
        // Check to see if there are any records of this email in our database
        if (_context.Users.Any(e => e.Email == value.ToString()))
        {
            // If yes, throw an error
            return new ValidationResult("This email is already registered. Login to continue.");
        }
        else
        {
            // If no, proceed
            return ValidationResult.Success;
        }
    }
}