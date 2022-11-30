class EnemyMagic : Enemy
{
    // Fields


    // Constructor
    public EnemyMagic() : base("Magic")
    {
        Health = 80;
        AttackList = new List<Attack>
        {
            new Attack("Fireball", 25),
            new Attack("Shield", 0),
            new Attack("Staff Strike", 15),
        };
    }

    // Methods
    public override void RandomAttack()
    {
        base.RandomAttack();
    }

    public void Heal(Enemy e)
    {
        e.Health += 40;
        System.Console.WriteLine($"{this.Name} healed {e.Name} for 40HP. ({e.Health})");
    }
}