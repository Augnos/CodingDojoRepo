Car FordFocus = new Car("gasoline", "Ford Focus", 5, "black", true, 95);
Bicycle Schwinn = new Bicycle("Schwinn", "Silver", 25);
Horse Mustang = new Horse("hay", "Mustang", "brown", 55);
// Vehicle test = new Vehicle();        Cannot creat instance of abstract type
List<Vehicle> VehicleList = new List<Vehicle> { FordFocus, Schwinn, Mustang };

// testing all vehicles added to list.
foreach (Vehicle x in VehicleList) System.Console.WriteLine(x._Name);

List<INeedFuel> needsFuel = new List<INeedFuel>();
foreach (Vehicle x in VehicleList)
{
    if(x is INeedFuel) needsFuel.Add((INeedFuel)x);
}

foreach(INeedFuel x in needsFuel)
{
    x.GiveFuel(10);
}