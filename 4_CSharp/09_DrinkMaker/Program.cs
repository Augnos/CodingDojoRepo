List<Drink> AllBeverages = new List<Drink>();
Drink DietCoke = new Soda(true, "Diet Coke", "dark", 40, 0);
Drink Starbucks = new Coffee("dark", "java", "Starbucks", "black", 140, 0);
Drink Cabernet = new Wine("Napa Valley", 2008, "Cabernet Sauvignon", "red", 78, 125);

AllBeverages.Add(DietCoke);
AllBeverages.Add(Starbucks);
AllBeverages.Add(Cabernet);
foreach(Drink x in AllBeverages)
{
    x.ShowDrink();
}