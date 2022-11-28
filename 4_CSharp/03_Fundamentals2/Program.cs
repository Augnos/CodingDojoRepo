// Three Basic Arrays

// Create an array with the integers 0 through 9 inside.
int[] arrayOfInts = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

// Create an array with the names "Tim", "Martin", "Nikki", and "Sara".
string[] arrayOfNames = {"Tim", "Martin", "Nikki", "Sara"};

// Create an array of length 10. Then fill it with alternating true/false values, starting with true. (Tip: do this using logic! Do not hard-code the values in!)
bool[] arrayOfBools = new bool[10];
for (int i = 0; i < 10; i++){
    if (i % 2 == 1) arrayOfBools[i] = true;
    if (i % 2 == 0) arrayOfBools[i] = false;
    System.Console.WriteLine(arrayOfBools[i]);
}


// List of Flavors

// Create a List of ice cream flavors that holds at least 5 different flavors. (Feel free to add more than 5!)
List<string> flavors = new List<string>();
flavors.Add("Chocolate");
flavors.Add("Vanilla");
flavors.Add("Strawberry");
flavors.Add("Mint Chocolate Chip");
flavors.Add("Dulce de Leche");

// Output the length of the List after you added the flavors.
System.Console.WriteLine(flavors.Count);

// Output the third flavor in the List.
System.Console.WriteLine(flavors[2]);

// Now remove the third flavor using its index location.
flavors.RemoveAt(2);

// Output the length of the List again. It should now be one fewer.
System.Console.WriteLine(flavors.Count);


// User Dictionary

// Create a dictionary that will store string keys and string values.
Dictionary<string, string> dict = new Dictionary<string, string>();

// Add key/value pairs to the dictionary where:
    // Each key is a name from your names array.
    // Each value is a randomly selected flavor from your flavors List
Random rand = new Random();
foreach (string name in arrayOfNames){
    dict.Add(name, flavors[rand.Next(4)]);
}

// Loop through the dictionary and print out each user's name and their associated ice cream flavor.
foreach (KeyValuePair<string,string> entry in dict){
    System.Console.WriteLine($"{entry.Key} - {entry.Value}");
}