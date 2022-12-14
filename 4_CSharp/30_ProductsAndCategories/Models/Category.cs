#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace ProductsAndCategories.Models;
public class Category
{
    [Key]   // Primary Key
    public int CategoryId { get; set; }

    // Fields
    [Required(ErrorMessage = "Name is required.")]
    public string Name { get; set; }

    // 1:M Navigation Properties
    public List<ProdCatAssn> ProductList { get; set; } = new List<ProdCatAssn>();

    // Timestamps
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}
