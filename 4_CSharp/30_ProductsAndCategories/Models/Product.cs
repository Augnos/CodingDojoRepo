#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace ProductsAndCategories.Models;
public class Product
{
    [Key]   // Primary Key
    public int ProductId { get; set; }

    // Fields
    [Required(ErrorMessage = "First name is required.")]
    public string Name { get; set; }

    [Required(ErrorMessage = "Description is required.")]
    public string Description { get; set; }

    [Required(ErrorMessage = "Price is required.")]
    public double? Price { get; set; }

    // 1:M Navigation Properties
    public List<ProdCatAssn> CategoryList { get; set; } = new List<ProdCatAssn>();

    // Timestamps
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}
