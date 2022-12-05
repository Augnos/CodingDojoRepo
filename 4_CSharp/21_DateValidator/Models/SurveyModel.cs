#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace _21_DateValidator.Models;

public class Survey
{
    [Required(ErrorMessage ="Your Name is required.")]
    [MinLength(2)]
    public string Name { get; set; }

    [Required(ErrorMessage ="Dojo Location is required.")]
    public string Location { get; set; }

    [FutureDateAttribute]
    public DateTime? StartDate { get; set; }

    [Required(ErrorMessage ="Favorite Language is required.")]
    public string Language { get; set; }

    [MinLength(20, ErrorMessage = "Comments are optional, but must be at least 20 characters in length.")]
    public string? Comments { get; set; }
}

public class FutureDateAttribute : ValidationAttribute
{    
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)    
    {        
        if (value == null) return new ValidationResult("Start Date is required.");

        TimeSpan timeSpan = (DateTime)value - DateTime.Now;

        if(timeSpan.TotalMilliseconds > 0) return new ValidationResult("Start Date must be before today's date.");
        else return ValidationResult.Success;
    }
}