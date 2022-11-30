class Enemy
{
    // fields
    private string Name;
    private int Health;
    private List<Attack> AttackList;
    public string _Name {get {return Name;}}
    public int _Health {get {return Health;}}
    public List<Attack> _AttackList {get {return AttackList;}}

    // constructor
    public Enemy(string n)
    {
        Name = n;
        Health = 100;
        AttackList = new List<Attack>();
    }

    // methods
    public void RandomAttack()
    {
        Random rand = new Random();
        int picked = rand.Next(AttackList.Count);
        System.Console.WriteLine($"Using {AttackList[picked]._Name}.");
    }

    public void AddAttack(Attack a)
    {
        System.Console.WriteLine($"Adding {a} to {this.Name}'s attack list...");
        AttackList.Add(a);
    }
}

