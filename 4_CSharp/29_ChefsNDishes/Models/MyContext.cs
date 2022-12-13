#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;

// Update namespace for current project
namespace _29_ChefsNDishes.Models;

public class MyContext : DbContext
{
    public MyContext(DbContextOptions options) : base(options) { }

    // Add plural versions of our models below, for db tables
    public DbSet<Dish> Dishes { get; set; }
    public DbSet<Chef> Chefs { get; set; }
}