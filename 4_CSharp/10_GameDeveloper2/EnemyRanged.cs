class EnemyRanged : Enemy
{
    // Fields
    private int Distance;

    // Constructor
    public EnemyRanged() : base("Ranged")
    {
        Distance = 5;
        AttackList = new List<Attack>
        {
            new Attack("Shoot an Arrow", 20),
            new Attack("Throw a Knife", 15),
        };
    }

    // Methods
    public override void RandomAttack()
    {
        if(Distance < 10) System.Console.WriteLine($"{this.Name} is too close and cannot attack.");
        else base.RandomAttack();
    }
    public void Dash()
    {
        Distance = 20;
        System.Console.WriteLine($"{this.Name} used Dash!");
    }
}