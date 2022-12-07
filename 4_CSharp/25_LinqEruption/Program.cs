List<Eruption> eruptions = new List<Eruption>()
{
    new Eruption("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
    new Eruption("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
    new Eruption("Chaiten", 2008, "Chile", 1122, "Caldera"),
    new Eruption("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
    new Eruption("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
    new Eruption("Taupo", 1910, "New Zealand", 760, "Caldera"),
    new Eruption("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
    new Eruption("Santorini", 46, "Greece", 367, "Shield Volcano"),
    new Eruption("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
    new Eruption("Aira", 766, "Japan", 1117, "Stratovolcano"),
    new Eruption("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
    new Eruption("Etna", 1329, "Italy", 3320, "Stratovolcano"),
    new Eruption("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
};
// Example Query - Prints all Stratovolcano eruptions
IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano");
PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");



// Execute Assignment Tasks here!

// Use LINQ to find the first eruption that is in Chile and print the result.
IEnumerable<Eruption> firstChile = eruptions.Where(eru => eru.Location == "Chile").OrderBy(y => y.Year).Take(1);
PrintEach(firstChile, "First eruption in Chile.");


// Find the first eruption from the "Hawaiian Is" location and print it. If none is found, print "No Hawaiian Is Eruption found."
IEnumerable<Eruption> firstHawaiian = eruptions.Where(eru => eru.Location == "Hawaiian Is").OrderBy(y => y.Year).Take(1);
if (firstHawaiian.Count() > 0)
{
    PrintEach(firstHawaiian, "First eruption in Hawaiian Is.");
}
else
{
    PrintEach(firstHawaiian, "No Hawaiian Is Eruption found.");
}


// Find the first eruption from the "Greenland" location and print it. If none is found, print "No Greenland Eruption found."
IEnumerable<Eruption> firstGreenland = eruptions.Where(eru => eru.Location == "Greenland").OrderBy(y => y.Year).Take(1);
if (firstGreenland.Count() > 0)
{
    PrintEach(firstGreenland, "First eruption in Greenland.");
}
else
{
    PrintEach(firstGreenland, "No Greenland Eruption found.");
}


// Find the first eruption that is after the year 1900 AND in "New Zealand", then print it.
Eruption first1900NewZealand = eruptions.Where(eru => eru.Location == "New Zealand" && eru.Year >= 1900).OrderBy(y => y.Year).First();
System.Console.WriteLine("First eruption after the year 1900 in New Zealand.");
System.Console.WriteLine(first1900NewZealand.ToString());


// Find all eruptions where the volcano's elevation is over 2000m and print them.
IEnumerable<Eruption> allElevationOver2000 = eruptions.Where(eru => eru.ElevationInMeters > 2000);
PrintEach(allElevationOver2000, "All eruptions where volcano's elevation is over 2000m.");


// Find all eruptions where the volcano's name starts with "L" and print them. Also print the number of eruptions found.
IEnumerable<Eruption> allL = eruptions.Where(eru => eru.Volcano[0] == 'L');
PrintEach(allL, "All volcanoes starting with 'L'.");
System.Console.WriteLine("Count: " + allL.Count() + "\n");


// Find the highest elevation, and print only that integer (Hint: Look up how to use LINQ to find the max!)
// IEnumerable<int> highestElevation = eruptions.OrderByDescending(eru => eru.ElevationInMeters).Take(1);
int highestElevation = eruptions.Max(eru => eru.ElevationInMeters);
System.Console.WriteLine($"\nHighest elevation found: {highestElevation} meters\n");


// Use the highest elevation variable to find a print the name of the Volcano with that elevation.
string highestVolcano = eruptions.Where(eru => eru.ElevationInMeters == highestElevation).First().Volcano;
System.Console.WriteLine($"\nHighest volcano: {highestVolcano} \n");


// Print all Volcano names alphabetically.
IEnumerable<Eruption> allAlphabetical = eruptions.OrderBy(eru => eru.Volcano);
PrintEach(allAlphabetical, "All eruptions ordered by volcano name, alphabetically.");


// Print the sum of all the elevations of the volcanoes combined.
int sumOfElevations = new int();
foreach (Eruption eru in eruptions)
{
    sumOfElevations += eru.ElevationInMeters;
}
System.Console.WriteLine($"\nSum of all volcano elevations: {sumOfElevations} meters\n");


// Print whether any volcanoes erupted in the year 2000 (Hint: look up the Any query)
bool any2000 = eruptions.Any(eru => eru.Year == 2000);
System.Console.WriteLine($"\nWere there any eruptions in 2000: {any2000} \n");


// Find all stratovolcanoes and print just the first three (Hint: look up Take)
IEnumerable<Eruption> threeStratovolcanoes = eruptions.Where(eru => eru.Type == "Stratovolcano").Take(3);
PrintEach(threeStratovolcanoes, "Three stratovolcano eruptions.");


// Print all the eruptions that happened before the year 1000 CE alphabetically according to Volcano name.
IEnumerable<Eruption> allBefore1000 = eruptions.Where(eru => eru.Year < 1000).OrderBy(eru => eru.Volcano);
PrintEach(allBefore1000, "All eruptions before 1000 CE.");


// Redo the last query, but this time use LINQ to only select the volcano's name so that only the names are printed.
IEnumerable<string> allBefore1000NameOnly = eruptions.Where(eru => eru.Year < 1000).OrderBy(eru => eru.Volcano).Select(eru => eru.Volcano);
System.Console.WriteLine("\nAll eruptions before 1000 CE. Name only.\n");
foreach(string volcano in allBefore1000NameOnly) 
{
    System.Console.WriteLine(volcano);
}



// Helper method to print each item in a List or IEnumerable. This should remain at the bottom of your class!
static void PrintEach(IEnumerable<Eruption> items, string msg = "")
{
    Console.WriteLine("\n" + msg);
    foreach (Eruption item in items)
    {
        Console.WriteLine(item.ToString());
    }
}