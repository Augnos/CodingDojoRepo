#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace _29_ChefsNDishes.Models;
public class Chef
{
    [Key]
    public int ChefId { get; set; }

    [Required(ErrorMessage = "First name is required.")]
    public string FirstName { get; set; }

    [Required(ErrorMessage = "Last name is required.")]
    public string LastName { get; set; }

    [OverEighteen]
    public DateTime DateOfBirth { get; set; }

    public List<Dish> CreatedDishes { get; set; } = new List<Dish>();

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}


// Custom Attributes

// Validates if the chef is 18 years or older
public class OverEighteenAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        // Replaces [Required]
        if (value == null) return new ValidationResult("Date of birth is required.");

        // Declare DoB as new DateTime variable
        DateTime DoB = (DateTime)value;

        // NowMinusEighteen is DateTime.Now - 18 years
        DateTime NowMinusEighteen = DateTime.Today.AddYears(-18);

        // If DoB was later than today 18 years ago, chef age is under 18, and returns error.
        if (DoB.CompareTo(NowMinusEighteen) > 0) return new ValidationResult("Chef must be at least 18 years old.");

        return ValidationResult.Success;
    }
}