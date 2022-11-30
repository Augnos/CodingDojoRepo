class Coffee : Drink
{
    // Fields
    private string Roast;
    private string Beans;

    // Constructor
    public Coffee(string roast, string beans,string name, string color, double temp, int calories) : base(name, color, temp, false, calories)
    {
        Roast = roast;
        Beans = beans;
    }

    // Methods
    public override void ShowDrink()
    {
        base.ShowDrink();
        System.Console.WriteLine($"Roast: {Roast}");
        System.Console.WriteLine($"Beans: {Beans}");
    }

}