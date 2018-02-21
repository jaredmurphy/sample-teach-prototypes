### Intro & Learning Objectives


### What is a Prototype
Every object in JavaScript has a special related object called the prototype.

Prototypes are simple ways to share behavior and data between multiple objects.

Prototypes allow us to use inheritance between objects similarly to how we did classical inheritance in Ruby.

There are some differences in the way that classical and prototypical inheritance work, but, we will talk about those differences in a little bit.

First, let's see an example

### Our first Prototype

Let's say we need an inheritance model for food.

First, we create the Food constructor, which is just a function that assigns certain values to new instances of the function.

```
function Food(type) {
  this.type = type;
}
```

We can create a new Food object by calling the new keyword on Food, and passing in the type.

```
const waffle = new Food('waffle');
```

We can also check to make sure the type was added correctly:

```
console.log(waffle.type);
```

##### Cool!

Now we have a constructor function that we can create new objects with that share similar behavior (that is, they can have a type and store that type).

Now for the prototype. Again, every object has a related object called the prototype from which it gets some of its behavior.

We can add methods to our Food objects by adding them to the prototype of Food.

```
Food.prototype.eat = function() {
  console.log(`You ate the ${this.type}!`);
};

waffle.eat();
```

##### Cool!

Another thing we can do is create another constructor that will inherit from food. Let's see how we can extend Food to make a Veggie.

```
function Veggie(color){
  Food.call(this, 'vegetable');
  this.color = color;
}

Veggie.prototype = new Food();

const carrot = new Veggie('orange');

carrot.eat();
console.log(carrot.type);
console.log(carrot.color);
```

So let's talk about what's happening here. We're setting the Veggie's prototype to an instance of Food, so that Veggie inherits the type property and eat method from Food.

We are also using Food.call to inherit the Food constructor (sort of like calling super in a Ruby class). Call is a special function that lets us dictate the value of `this` inside of the object it's called on.

##### Let's talk prototypes vs classes
Although the API is different and there is definitely some syntactical differences, it's really important to understand that the prototype works differently under the hood from classes in Ruby.

The main difference is in Ruby and other languages with true classical inheritance, the class is truly a blueprint and all instances of the class are just copies of that blueprint.

However, the prototype is much more like a delegate. So, the prototype itself is not really a blueprint in fact the objects that inherit from it do not actually own these methods, they merely defer to the prototype to provide them. Which is why it is more of a delegate than a blueprint.

###### Let's see an example of this

So now if we change the eat method after declaring the carrot object, we will see that carrot still refers to its prototypes method at the time it is called rather than at the time it is declared.

##### Now that we understand how prototypes work, let's see what kind of magic the Javascript community has provided for us in recent years.

We can rewrite the previous code with a class syntax, which is maybe easier to reason about but is definitely more familiar for lots of programmers.

```

class Food {
  constructor(type){
    this.type = type;
  }

  eat(){
    console.log(`You ate the ${this.type}`);
  }
}

class Veggie extends Food {
  constructor(color){
    super('vegetable');
    this.color = color;
  }
}
```
