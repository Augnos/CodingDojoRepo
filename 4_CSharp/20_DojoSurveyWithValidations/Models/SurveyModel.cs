#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace _20_DojoSurveyWithValidations.Models;

public class Survey
{
    [Required]
    [MinLength(2)]
    public string Name { get; set; }

    [Required]
    public string Location { get; set; }

    [Required]
    public string Language { get; set; }

    [MinLength(20, ErrorMessage = "Comments are optional, but must be at least 20 characters in length.")]
    public string? Comments { get; set; }
}