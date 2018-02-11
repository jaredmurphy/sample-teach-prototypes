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
    console.log(`Mmmmmm. I love waffles with ${this.toppings.join(', ')}!`);
  }
}

class SpecialNumberOne extends Waffle {
  constructor() {
    super(['Syrup', 'Whipped Cream', 'Blueberries']);
  }
}

const order = new SpecialNumberOne();
order.eat();
order.getToppings();

// ES5
