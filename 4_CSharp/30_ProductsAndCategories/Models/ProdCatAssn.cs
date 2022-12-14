#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace ProductsAndCategories.Models;

public class ProdCatAssn
{
    [Key]   // Primary Key
    public int ProdCatAssnId { get; set; }

    // M:M Fields
    [Required(ErrorMessage = "Product is required.")]
    public int ProductId { get; set; }
    [Required(ErrorMessage = "Category is required.")]
    public int CategoryId { get; set; }
    
    // M:1 Navigation Properties
    public Product? Product { get; set; }
    public Category? Category { get; set; }
}