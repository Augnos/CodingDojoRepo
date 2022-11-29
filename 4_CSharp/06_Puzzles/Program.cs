// Coin Flip
static string FlipCoin()
{
    Random rand = new Random();
    int flip = rand.Next(2);
    if (flip == 1) return "heads";
    else return "tails";
}
System.Console.WriteLine(FlipCoin());


// Dice Roll
static int DiceRoll(int sides = 6)  // Default roll is a D6
{
    Random rand = new Random();
    int result = rand.Next(sides) + 1;
    System.Console.WriteLine("Rolling D" + sides + ": " + result);
    return result;
}
System.Console.WriteLine(DiceRoll());
System.Console.WriteLine(DiceRoll(20)); // Rolling a D20


// Stat Roll
static int StatRoll(int rolls = 4, int sides = 6)
{
    System.Console.WriteLine("Rolling D" + sides + " "+rolls+" times");
    int[] arr = new int[rolls];
    for (int i = 0; i < rolls; i++)
    {
        arr[i] = DiceRoll(sides);
        System.Console.WriteLine("rolling: " + arr[i]);
    }

    int max = arr[0];
    foreach (int roll in arr)
    {
        if (max < roll) max = roll;
    }

    System.Console.WriteLine("Largest roll: " + max);
    return max;
}
System.Console.WriteLine(StatRoll());
System.Console.WriteLine(StatRoll(10));


// Roll Until...
static int RollUntil(int target, int sides = 6)
{
    System.Console.WriteLine("Rolling until D" + sides + " lands on " + target);

    if (target > sides || target < 1)
    {
        System.Console.WriteLine("Target value not in range, try again.");
        return 0;
    }

    int count = 0;
    bool landed = false;
    while (!landed)
    {
        count++;
        if (DiceRoll(sides) == target) landed = true;
    }

    return count;
}
System.Console.WriteLine(RollUntil(1));
System.Console.WriteLine(RollUntil(1, 20));
System.Console.WriteLine(RollUntil(0));