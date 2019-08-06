// inheritance - subclasses

//implement methods in subclass (Human) which will override parent class functionality

//1. implement a custom function which will add "Mr" to name property in subclass
//2. implement a method in subclass which will increment the power by 2
//3. implement a method in subclass to reduce the power by half
//4. add 2 more properties to Human class - city and state (private to human class)
class superhero {
  constructor(name, strength, speed) {
    this._name = name;
    this._strength = strength;
    this._speed = speed;
  }
  powerUp() {
    this.strength += 5;
  }
  get name() {
    return this._name;
  }
  set name(newname) {
    this._name = newname;
  }
  static goodHero() {
    return true;
  }
}

class Human extends superhero {
  constructor(healthpoints, city, state, ...superherostuff) {
    super(...superherostuff);
    this._healthpoints = healthpoints;
    this._city = city;
    this._state = state;
  }
  addMrToName() {
    return `Mr.${super.name}`;
  }
  set name(name) {
    this._name = name;
  }
  incrementPowerByTwo() {
    this._strength += 2;
  }
  reducePoweryHalf() {
    this._strength /= 2;
  }
}
const details = [20, "hyderabad", "telangana", "Bill", 10, 8];
const hero3 = new Human(...details);
console.log(hero3);
console.log(hero3.addMrToName());
hero3.incrementPowerByTwo();
console.log("After incrementing power by 2:", hero3);
hero3.reducePoweryHalf();
console.log("After reducing power by half :", hero3);
