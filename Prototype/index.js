// Create dog
const Dog = function createDog(name, age) {
  this.name = name;
  this.age = age;
};

Dog.prototype.bark = function bark() {
  console.log('Woof Woof');
};

module.exports = {
  Dog,
};
