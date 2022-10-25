class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        for (const x in this) console.log(x + ": " + this[x]);
        // console.log("name: " + this.name);
        // console.log("health: " + this.health);
        // console.log("speed: " + this.speed);
        // console.log("strength: " + this.strength);
    }

    drinkSake() {
        this.health += 10;
        console.log(this.name + " drank sake. +10 health. (" + this.health + ")");
    }
}

const ninja1 = new Ninja("Hyabusa", 60, 5);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


class Sensei extends Ninja {
    constructor(name, wisdom = 10){
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        this.drinkSake();
    }
}

const sensei1 = new Sensei("Master Splinter");
sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();
