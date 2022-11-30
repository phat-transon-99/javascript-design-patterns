const Subject = (function createSubject() {
  const observers = [];

  function subscribeObserver(observer) {
    // Add observer into array
    observers.push(observer);
  }

  function unsubscribeObserver(observer) {
    // Remove observer from array
    const observerIndex = observers.indexOf(observer);
    if (observerIndex !== -1) {
      observers.splice(observerIndex, 1);
    }
  }

  function notifyAll() {
    // Notify all observers
    for (let i = 0; i !== observers.length; i += 1) {
      observers[i].notify();
    }
  }

  return {
    subscribeObserver,
    unsubscribeObserver,
    notifyAll,
  };
}());

const Observer = function createObserver(observerName) {
  function notify() {
    console.log(`Observer ${observerName} is notified`);
  }

  return {
    notify,
  };
};

module.exports = {
  Subject, Observer,
};
