const Printer = (function printerFactory() {
  // Static instance
  let printerInstance;

  // Method to create printer
  function createPrinter() {
    function turnOn() {
      console.log('Printer is turning on');
    }

    function print() {
      console.log('Printer is printing your document');
    }

    return {
      turnOn,
      print,
    };
  }

  return {
    getInstance() {
      if (!printerInstance) {
        printerInstance = createPrinter();
      }

      return printerInstance;
    },
  };
}());

module.exports = Printer;
