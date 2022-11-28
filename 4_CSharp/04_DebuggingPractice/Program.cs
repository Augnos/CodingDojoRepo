// Challenge 1
bool amProgrammer = true;
double Age = 27.9;
List<string> Names = new List<string>();
// Names = "Monica";    Names is already declared as a list.
Dictionary<string, string> MyDictionary = new Dictionary<string, string>();
MyDictionary.Add("Hello", "0");
MyDictionary.Add("Hi there", "0");
// This is a tricky one! Hint: look up what a char is in C#
string MyName = "MyName";


// Challenge 2
List<int> Numbers = new List<int>() {2,3,6,7,1,5};
for(int i = Numbers.Count-1; i >= 0; i--)
{
    Console.WriteLine(Numbers[i]);
}


// Challenge 3
List<int> MoreNumbers = new List<int>() {12,7,10,-3,9};
foreach(int i in MoreNumbers)
{
    Console.WriteLine(i);
}


// // Challenge 4
// List<int> EvenMoreNumbers = new List<int> {3,6,9,12,14};
// foreach(int num in EvenMoreNumbers)
// {
//     if(num % 3 == 0)
//     {
//         num = 0;    // can't assign value to num, because it is the variable name being iterated.
//     }
// }


// // Challenge 5
// // What can we learn from this error message?
// string MyString = "superduberawesome";
// MyString[7] = "p";      
    // string indices can't be reassigned, and strings are immutable.


// Challenge 6
// Hint: some bugs don't come with error messages
Random rand = new Random();
int randomNum = rand.Next(12);      // randomNum will be a value between 0 and 11...
if(randomNum == 12)
{
    Console.WriteLine("Hello");     // "Hello" will never be printed, because randomNum can't ever be 12
}
