class Animal {
    constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound(sound) {
        console.log(`${this.species} makes a ${sound} sound`);
    }
}

class Cat extends Animal {
    purr() {
        this.makeSound("purr");
    }
}

class Dog extends Animal {
    bark() {
        this.makeSound("woof");
    }
}

// Example usage:
const cat = new Cat("Cat");
const dog = new Dog("Dog");

cat.purr();  // Output: Cat makes a purr sound
dog.bark();  // Output: Dog makes a woof sound
