#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace _29_ChefsNDishes.Models;

// Dish Model
public class Dish
{
    [Key]   // Primary Key
    public int DishId { get; set; }

    // Fields
    [Required(ErrorMessage = "Name is required.")]
    public string Name { get; set; }

    [Required(ErrorMessage = "Calories is required.")]
    [Range(1, Int16.MaxValue, ErrorMessage = "Calories must be greater than 0.")]
    public int? Calories { get; set; }

    [Required(ErrorMessage = "Tastiness is required.")]
    [Range(1, 5, ErrorMessage = "Tastiness scale is from 1 to 5.")]
    public int? Tastiness { get; set; }

    // M:1 Fields
    [Required(ErrorMessage = "Chef is required.")]
    public int? ChefId { get; set; }
    
    // M:1 Navigation Properties
    public Chef? Creator { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}