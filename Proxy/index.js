const Person = function createPerson(name, age) {
  const personName = name;
  const personAge = age;

  return {
    sayName() {
      console.log(`Name: ${personName}`);
    },
    sayAge() {
      console.log(`Age: ${personAge}`);
    },
  };
};

const PersonProxy = function createProxy(object) {
  let sayAgeCount = 0;
  let sayNameCount = 0;

  return {
    sayName() {
      sayNameCount += 1;
      object.sayName();
    },
    sayAge() {
      sayAgeCount += 1;
      object.sayAge();
    },
    log() {
      console.log(`sayName has been called ${sayNameCount} times and sayAge has been called ${sayAgeCount} times`);
    },
  };
};

module.exports = {
  Person,
  PersonProxy,
};
