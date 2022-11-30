class Enemy
{
    // Fields
    internal string Name;
    internal int Health;
    internal List<Attack> AttackList;
    public string _Name {get {return Name;}}
    public int _Health {get {return Health;}}
    public List<Attack> _AttackList {get {return AttackList;}}

    // Constructor
    public Enemy(string name)
    {
        Name = name;
        Health = 100;
        AttackList = new List<Attack>();
    }

    // Methods
    public virtual void RandomAttack()
    {
        Random rand = new Random();
        int picked = rand.Next(AttackList.Count);
        System.Console.WriteLine($"{this.Name} used {AttackList[picked]._Name}. It did {AttackList[picked]._Damage} damage.");
    }

    public void AddAttack(Attack a)
    {
        System.Console.WriteLine($"Adding {a} to {this.Name}'s attack list...");
        AttackList.Add(a);
    }
}

