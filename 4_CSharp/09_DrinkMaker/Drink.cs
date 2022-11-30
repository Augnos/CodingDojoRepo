public class Drink
{
    private string Name;
    private string Color;
    private double Temperature;
    private bool IsCarbonated;
    private int Calories;

    // We need a basic constructor that takes all these features in
    public Drink(string name, string color, double temp, bool isCarb, int calories)
    {
        Name = name;
        Color = color;
        Temperature = temp;
        IsCarbonated = isCarb;
        Calories = calories;
    }

    public virtual void ShowDrink()
    {
        System.Console.WriteLine($"Name: {Name}");
        System.Console.WriteLine($"Color: {Color}");
        System.Console.WriteLine($"Temperature: {Temperature}");
        System.Console.WriteLine($"Carbonated: {IsCarbonated}");
        System.Console.WriteLine($"Calories: {Calories}");
    }

}
