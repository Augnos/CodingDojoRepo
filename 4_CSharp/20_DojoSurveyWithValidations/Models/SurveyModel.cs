#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace _20_DojoSurveyWithValidations.Models;

public class Survey
{
    // [Required]
    // [MinLength(2)]
    [DisplayName("Name")]
    public string Name { get; set; }

    // [Required]
    [DisplayName("Location")]
    public string Location { get; set; }

    // [Required]
    [DisplayName("Language")]
    public string Language { get; set; }

    // [MinOrNull]
    [DisplayName("Comments")]
    public string Comments { get; set; }
}



public class MinOrNull : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        int ValueLength = new int();

        string ValueStr = (string)value;
        // System.Console.WriteLine(ValueStr == null);
        
        if (ValueStr != null) ValueLength = ValueStr.Length;
        // System.Console.WriteLine(ValueLength);
        
        if (ValueStr == null || ValueLength >= 12)
        {
            System.Console.WriteLine(true);
            return ValidationResult.Success;
        }
        else
        {
            System.Console.WriteLine(false);
            return new ValidationResult("Comments are optional, but they must be at least 2 characters in length.");
        }
    }
}