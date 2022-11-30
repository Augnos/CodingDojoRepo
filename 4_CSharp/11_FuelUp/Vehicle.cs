abstract class Vehicle
{
    // private fields
    private string Name;
    private int Passengers;
    private string Color;
    private bool Engine;
    private int TopSpeed;
    private int Mileage = 0;

    // public fields
    // public string FuelType {get;set;}
    // public int FuelTotal {get;set;}
    public string _Name {get {return Name;}}
    public int _Passengers {get {return Passengers;}}
    public string _Color {get {return Color;}}
    public bool _Engine {get {return Engine;}}
    public int _TopSpeed {get {return TopSpeed;}}


    // constructor all except mileage
    public Vehicle(string name, int passengers, string color, bool engine, int topSpeed)
    {
        Name = name;
        Passengers = passengers;
        Color = color;
        Engine = engine;
        TopSpeed = topSpeed;
    }

    // constructor for name and color
    public Vehicle(string n, string c)
    {
        Name = n;
        Color = c;
    }

    // methods
    public void ShowInfo()
    {
        System.Console.WriteLine($"Name: {_Name}");
        System.Console.WriteLine($"No. of passengers: {Passengers}");
        System.Console.WriteLine($"Color: {Color}");
        System.Console.WriteLine($"Has engine: {Engine}");
        System.Console.WriteLine($"Top speed: {TopSpeed}");
        System.Console.WriteLine($"Mileage: {Mileage}");
    }

    public void Travel(int distance)
    {
        Mileage += distance;
    }

    
}