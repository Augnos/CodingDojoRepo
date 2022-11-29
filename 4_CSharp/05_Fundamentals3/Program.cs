// 1. Iterate and print values
// Given a List of strings, iterate through the List and print out all the values. 
// Bonus: How many different ways can you find to print out the contents of a List? (There are at least 3! Check Google!)
static void PrintList(List<string> MyList)
{
    // System.Console.WriteLine("Using foreach loop");
    // foreach (string i in MyList) System.Console.WriteLine(i);

    // System.Console.WriteLine("Using for loop");
    // for (int i = 0; i < MyList.Count; i++) System.Console.WriteLine(MyList[i]);

    // System.Console.WriteLine("Using while loop");
    int index = 0;
    while (index < MyList.Count)
    {
        System.Console.WriteLine(MyList[index]);
        index++;
    }

}
PrintList(new List<string> { "Josh", "Jacob", "Celeste", "Gabriella" });


// 2. Print Sum
// Given a List of integers, calculate and print the sum of the values.
static void SumOfNumbers(List<int> IntList)
{
    int sum = 0;
    foreach (int num in IntList)
    {
        sum += num;
    }
    System.Console.WriteLine(sum);
}
SumOfNumbers(new List<int> { 1, 3, 5, 6, 2, 6, 4, 1, 9 });


// 3. Find Max
// Given a List of integers, find and return the largest value in the List.
static int FindMax(List<int> IntList)
{
    int max = IntList[0];
    for (int i = 0; i < IntList.Count; i++)
    {
        if (max < IntList[i]) max = IntList[i];
    }
    return max;
}
System.Console.WriteLine(FindMax(new List<int> { 1, 2, 3, 4, 5, 100, 6 }));


// 4. Square the Values
// Given a List of integers, return the List with all the values squared. (Hint: use your PrintList method to check that it worked!)
static List<int> SquareValues(List<int> IntList)
{
    List<int> SquaredList = new List<int>();
    foreach (int x in IntList)
    {
        SquaredList.Add(x * x);
    }
    return SquaredList;
}
foreach (int i in SquareValues(new List<int> { 1, 2, 3, 4, 5, 100, 6 })) System.Console.WriteLine(i);


// 5. Replace Negative Numbers with 0
// Given an array of integers, return the array with all values below 0 replaced with 0.
static int[] NonNegatives(int[] IntArray)
{
    for (int i = 0; i < IntArray.Length; i++)
    {
        if (IntArray[i] < 0) IntArray[i] = 0;
    }
    return IntArray;
}
foreach (int i in NonNegatives(new int[] { -2, -1, 1, 2, 3 })) System.Console.WriteLine(i);


// 6. Print Dictionary
// Given a dictionary, print the contents of the said dictionary.
static void PrintDictionary(Dictionary<string, string> MyDictionary)
{
    foreach (KeyValuePair<string, string> entry in MyDictionary)
    {
        System.Console.WriteLine($"{entry.Key}, {entry.Value}");
    }
}
Dictionary<string, string> sampleDict = new Dictionary<string, string>();
sampleDict.Add("Breath of the Wild", "Switch");
sampleDict.Add("Warframe", "PC");
sampleDict.Add("Halo", "Xbox");
PrintDictionary(sampleDict);


// 7. Find Key
// Given a search term, return true or false whether the given term is a key in a dictionary.
static bool FindKey(Dictionary<string, string> MyDictionary, string SearchTerm)
{
    foreach (KeyValuePair<string, string> entry in MyDictionary)
    {
        if (SearchTerm == entry.Key) return true;
    }
    return false;
}
System.Console.WriteLine(FindKey(sampleDict, "Halo"));
System.Console.WriteLine(FindKey(sampleDict, "Gears of War"));


// 8. Generate a Dictionary
// Given a List of names and a List of integers, create a dictionary where the key is a name from the List of names and the value is a number from the List of numbers. 
// Assume that the two Lists will be of the same length. Don't forget to print your results to make sure it worked.
// Ex: Given ["Julie", "Harold", "James", "Monica"] and [6,12,7,10], return a dictionary
// {
//	"Julie": 6,
//	"Harold": 12,
//	"James": 7,
//	"Monica": 10
// } 
static Dictionary<string, int> GenerateDictionary(List<string> Names, List<int> Numbers)
{
    Dictionary<string, int> NewDict = new Dictionary<string, int>();
    for (int i = 0; i < Names.Count; i++)
    {
        NewDict[Names[i]] = Numbers[i];
    }
    return NewDict;
}
Dictionary<string, int> generatedDict = GenerateDictionary(
    new List<string> { "Julie", "Harold", "James", "Monica" },
    new List<int> { 6, 12, 7, 10 }
);

foreach (KeyValuePair<string, int> entry in generatedDict)
{
    System.Console.WriteLine($"{entry.Key}, {entry.Value}");
}
