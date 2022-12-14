namespace ProductsAndCategories.Models;
using System.ComponentModel.DataAnnotations;

public class MyViewModel
{
    public Category? Category { get; set; }
    public Product? Product { get; set; }
    public List<Category>? AllCategories { get; set; }
    public List<Product>? AllProducts { get; set; }

    // M:M Fields
    // [Required(ErrorMessage = "Product is required.")]
    public int ProductId { get; set; }
    // [Required(ErrorMessage = "Category is required.")]
    public int CategoryId { get; set; }
}
