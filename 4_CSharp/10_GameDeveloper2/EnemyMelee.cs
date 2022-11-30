class EnemyMelee : Enemy
{
    // Fields


    // Constructor
    public EnemyMelee() : base("Melee")
    {
        Health = 120;
        AttackList = new List<Attack>
        {
            new Attack("Punch", 20),
            new Attack("Kick", 15),
            new Attack("Tackle", 25)
        };
    }

    // Methods
    public override void RandomAttack()
    {
        base.RandomAttack();
    }
    public void Rage()
    {
        Random rand = new Random();
        int picked = rand.Next(AttackList.Count);
        System.Console.WriteLine($"{this.Name} used Rage! {AttackList[picked]._Name} did {AttackList[picked]._Damage + 10} damage.");
    }
}