Enemy Charmander = new Enemy("Charmander");
Attack Tackle = new Attack("Tackle", 20);
Attack Ember = new Attack("Flamethrower", 45);
Attack FireBlast = new Attack("Fire Blast", 55);
Charmander.AddAttack(Tackle);
Charmander.AddAttack(Ember);
Charmander.AddAttack(FireBlast);
foreach(Attack x in Charmander._AttackList)
{
    System.Console.WriteLine(x._Name);
}
Charmander.RandomAttack();