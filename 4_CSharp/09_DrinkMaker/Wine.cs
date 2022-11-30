class Wine : Drink
{
    // Fields
    private string Region;
    private int Year;

    // Constructor
    public Wine(string region, int year, string name, string color, double temp, int calories) : base(name, color, temp, false, calories)
    {
        Region = region;
        Year = year;
    }

    // Methods
    public override void ShowDrink()
    {
        base.ShowDrink();
        System.Console.WriteLine($"Region: {Region}");
        System.Console.WriteLine($"Year: {Year}");
    }

}