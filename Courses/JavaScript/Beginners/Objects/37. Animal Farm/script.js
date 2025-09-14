// Write code below 💖

const pig = {
  name: "John Pork",
  type: "pig",
  age: 69,
  makeSound: function() {
    return `${this.name} is a ${this.age} year old ${this.type} that goes moooooo!`;
  }
};

const sheep = {
  name: "Steve",
  type: "sheep",
  age: 420,
  makeSound: function() {
    return `${this.name} is a ${this.age} year old ${this.type} that goes wooof wooof!`;
  }
};

const dog = {
  name: "Softie",
  type: "dog",
  age: 67,
  makeSound: function() {
    return `${this.name} is a ${this.age} year old ${this.type} that goes baaaaaaa!`;
  }
};

console.log(pig.makeSound());
console.log(sheep.makeSound());
console.log(dog.makeSound());
