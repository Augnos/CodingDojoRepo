class Attack
{
    // fields
    private string Name;
    private int Damage;
    public string _Name {get {return Name;}}
    public int _Damage {get {return Damage;}}

    // constructor
    public Attack (string name, int damage)
    {
        Name = name;
        Damage = damage;
    }
}