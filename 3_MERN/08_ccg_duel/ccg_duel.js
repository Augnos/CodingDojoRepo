class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }

    play(){
        console.log("You played " + this.name);
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        console.log(this.name + " attacked " + target.name + " for " + this.power + "!")
        target.res -= this.power;
        console.log(target.name + " res reduced by " + this.power + " to " + target.res + "!")

        if (target.res < 0) console.log (target.name + " was defeated.")
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    cast(target) {
        console.log(this.name + " was cast on " + target.name + "!");
        target[this.stat] += this.magnitude;
        if (this.magnitude > 0) console.log("Raised " + target.name + "'s " + this.stat + " by " + this.magnitude + " to " + target[this.stat] + ".");
        else if (this.magnitude < 0) console.log("Lowered " + target.name + "'s " + this.stat + " by " + this.magnitude + " to " + target[this.stat] + ".");
        else if (this.magnitude == 0) console.log("It had no effect.");
    }
}

unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
unit2 = new Unit("Black Belt Ninja", 4, 5, 4);
effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3);
effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
effect3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

console.log(unit1);
effect1.cast(unit1);
console.log(unit2);
effect2.cast(unit1);
effect3.cast(unit1);
unit1.attack(unit2);