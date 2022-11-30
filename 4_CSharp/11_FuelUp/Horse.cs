class Horse : Vehicle, INeedFuel
{
    // Fields
    public string FuelType { get; set; }
    public int FuelTotal { get; set; }


    // Constructor
    public Horse(string ftype, string n, string c, int ts) : base(n, 1, c, false, ts)
    {
        FuelType = ftype;
        FuelTotal = 10;
    }

    // Methods
    public void GiveFuel(int Amount)
    {
        System.Console.WriteLine($"Fed {this._Name} some {FuelType}.");
    }
}