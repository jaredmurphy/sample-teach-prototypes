// create food prototype
// object version
// const food = {
//   init: function(type) {
//     this.type = type;
//   },
//
//   eat: function() {
//     console.log(`You ate the ${this.type}!`);
//   },
// };

// constructor version
function Food(type) {
  this.type = type;
}

Food.prototype.eat = () => {
  console.log(`You ate the ${this.type}!`);
};

function waffle(toppings) {
  this.prototype = new food('waffle');
  this.toppings = toppings;

  this.getToppings = () => {
    const toppingsString = this.toppings.join(', ');
    console.log(`Every waffle is better with ${toppingsString}!`);
  };
}
// waffle.prototype =
//
// function waffle(toppings) {
//   this.toppings = toppings;
// }

// constructor function creates a new food object
const x = new waffle(['Blueberries', 'Syrup', 'Whipped Cream']);

x.getToppings();
x.eat();

// make waffle and carrot objects inherit from food
// const waffle = Object.create(food);
// waffle.init('waffle');
// waffle.eat();
//
// const carrot = Object.create(food);
// carrot.init('carrot');
// carrot.eat();

/////////////////////////////////////////////////////
// Let's see if waffle and carrot are COPIES of food:

// const waffle = Object.create(food);
// const carrot = Object.create(food);
//
// food.eat = function() {
//   console.log(`You TOTALLY ate the ${this.type}!`);
// };
//
// waffle.init('waffle');
// waffle.eat();
//
// carrot.init('carrot');
// carrot.eat();
////////////////////////////////////////////////////////

// Waffle and carrot are NOT copies of food. They just use the food object as
// their prototype.

// The way prototypes work is that if the waffle or carrot do not have their
// own 'eat' method, then they will look to their prototype to provide it.

// In this way, prototypes are slightly different than the more traditional
// classical inheritance that we see in Ruby, Java, and other object oriented
// programming languages

////////////////////////////////////////////////////////

// What will happen if we do this?
//const waffle = Object.create(food);
//waffle.eat();
//food.type = 'I am all foods';
//carrot.eat();

// Why is the first eat call undefined?
// Why is the second eat call using the type from food?

/////////////////////////////////////////////////////////

// Type Checking Prototypes

// const waffle = Object.create(food);
// const carrot = Object.create(food);
//
// console.log('waffle is food?', food.isPrototypeOf(waffle));
// console.log('carrot is food?', food.isPrototypeOf(carrot));
// console.log('int is food?', food.isPrototypeOf(100));

// You can use the food object to see if it is a prototype of another object
