// Define button types
const WinButton = function createButton() {
  return {
    identify() {
      console.log('This is a Windows button');
    },
  };
};

const MacButton = function createButton() {
  return {
    identify() {
      console.log('This is a Macbook button');
    },
  };
};

const WinCheckBox = function createCheckBox() {
  return {
    identify() {
      console.log('This is a Windows checkbox');
    },
  };
};

const MacCheckBox = function createCheckBox() {
  return {
    identify() {
      console.log('This is a Macbook checkbox');
    },
  };
};

// Define factory
const WinFactory = function createFactory() {
  return {
    createButton() {
      return WinButton();
    },
    createCheckBox() {
      return WinCheckBox();
    },
  };
};

const MacFactory = function createFactory() {
  return {
    createButton() {
      return MacButton();
    },
    createCheckBox() {
      return MacCheckBox();
    },
  };
};

// Create factory
const createFactory = function createFactory(os) {
  if (os === 'windows') {
    return WinFactory();
  } if (os === 'macos') {
    return MacFactory();
  }
  throw new Error('OS not supported');
};

module.exports = {
  createFactory,
};
