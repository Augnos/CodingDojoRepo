Vehicle FordFocus = new Vehicle("Ford Focus", 5, "Black", true, 95);
Vehicle ToyotaPrius = new Vehicle("Toyota Prius", 5, "Yellow", true, 90);
Vehicle Skateboard = new Vehicle("skateboard", "green");
Vehicle Airplane = new Vehicle("Airplane", 170, "White", true, 700);

List<Vehicle> AllVehicles = new List<Vehicle> {FordFocus, ToyotaPrius, Skateboard, Airplane};

foreach(Vehicle x in AllVehicles) x.ShowInfo();
FordFocus.Travel(100);
FordFocus.ShowInfo();