// Create and initialize a module
const Person = (function createPerson(age, name) {
  const personName = name;
  const personAge = age;

  function sayName() {
    console.log(`Hello, I'm ${personName}.`);
  }

  function sayAge() {
    console.log(`Hello, I'm ${personAge} years old.`);
  }

  return {
    sayName,
    sayAge,
  };
}(27, 'John'));

// Export person
module.exports = Person;
