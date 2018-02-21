class Food {
  constructor(type) {
    this.type = type;
  }

  eat() {
    console.log(`You ate the ${this.type}!`);
  }
}

// const waffle = new Food('waffle');
// waffle.eat();

class Waffle extends Food {
  constructor(toppings) {
    super('Waffle');
    this.toppings = [...toppings];
  }

  getToppings() {
    const toppingsString = this.toppings.join(', ');
    console.log(`Mmmmmm. I love waffles with ${toppingsString}!`);
  }
}

class SpecialNumberOne extends Waffle {
  constructor() {
    super(['Syrup', 'Whipped Cream', 'Blueberries']);
  }
}

// const order = new SpecialNumberOne();
// order.eat();
// order.getToppings();

// Let's see what happens if we change the eat method on the food class

const order = new SpecialNumberOne();

Food.eat()

console.log('order prototype', SpecialNumberOne.isPrototypeOf(order));
console.log('SpecialNumberOne prototype', SpecialNumberOne.prototype);
console.log('SpecialNumberOne prototype', SpecialNumberOne.prototype);

Food.prototype.eat = function() {
  console.log(`You REALLY ate the ${this.type}!`);
};

order.eat();
order.getToppings();
