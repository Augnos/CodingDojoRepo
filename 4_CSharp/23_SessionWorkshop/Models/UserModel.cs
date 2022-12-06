#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace _23_SessionWorkshop.Models;

public class User
{
    [Required(ErrorMessage = "Please enter a name.")]
    public string Name { get; set; }
}


// sample custom validations

// public class FutureDateAttribute : ValidationAttribute
// {
//     protected override ValidationResult IsValid(object value, ValidationContext validationContext)
//     {
//         if (value == null) return new ValidationResult("Date of Birth is required.");

//         TimeSpan timeSpan = (DateTime)value - DateTime.Now;

//         if (timeSpan.TotalMilliseconds > 0) return new ValidationResult("Date of Birth must be in the past.");
//         else return ValidationResult.Success;
//     }
// }

// public class OddNumberAttribute : ValidationAttribute
// {
//     protected override ValidationResult IsValid(object value, ValidationContext validationContext)
//     {
//         if (value == null) return new ValidationResult("Favorite Number is required.");

//         if ((int)value % 2 == 1) return ValidationResult.Success;
//         else return new ValidationResult("Favorite Odd Number has to be...and odd number.");
//     }
// }

// public class PrimeNumberAttribute : ValidationAttribute
// {
//     protected override ValidationResult IsValid(object value, ValidationContext validationContext)
//     {
//         if (value == null) return new ValidationResult("Favorite Number is required.");
//         ValidationResult notPrime = new ValidationResult("Favorite Number must be a prime number.");

//         if ((int)value <= 1) return notPrime;
//         for (int i = 2; i <= (int)value / 2; i++)
//         {
//             if ((int)value % i == 0) return notPrime;
//         }
//         return ValidationResult.Success;
//     }
// }
