#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace _26_FirstConnection.Models;

public class Pet 
{
    [Key]
    public int PetId {get;set;}
    public string Name {get;set;}
    public string Type {get;set;}
    public int Age {get;set;}
    public bool HasFur {get;set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;

}