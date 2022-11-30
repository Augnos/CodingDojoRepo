class Car : Vehicle, INeedFuel
{
    // Fields
    public string FuelType { get; set; }
    public int FuelTotal { get; set; }


    // Constructor
    public Car(string ftype, string n, int p, string c, bool e, int ts) : base(n, p, c, e, ts)
    {
        FuelType = ftype;
        FuelTotal = 10;
    }

    // Methods
    public void GiveFuel(int Amount) 
    {
        System.Console.WriteLine($"Topped out the fuel tank for {this._Name}.");
    }
}