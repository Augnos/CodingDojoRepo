#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;

// Update namespace for current project
namespace ProductsAndCategories.Models;

public class MyContext : DbContext
{
    public MyContext(DbContextOptions options) : base(options) { }

    // Add plural versions of our models below, for db tables
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<ProdCatAssn> ProdCatAssns { get; set; }
}