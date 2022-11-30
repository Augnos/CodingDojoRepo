class Soda : Drink
{
    // Fields
    private bool Diet;
    
    // Constructor
    public Soda(bool diet, string name, string color, double temp, int calories) : base(name, color, temp, true, calories )
    {
        Diet = diet;
    }

    // Methods
    public override void ShowDrink()
    {
        base.ShowDrink();
        System.Console.WriteLine($"Diet: {Diet}");
    }
}