const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.counter = 1;
    this.max_counter = 1;
  }; 

  calculateDepth(arr) {
    let found = false;
    for (let i in arr) {
      if (typeof arr[i] == "object") {
        found = true;
        this.counter += 1;
        this.calculateDepth(arr[i]);
      }
    }
    if (!found) {
      if (this.max_counter < this.counter) this.max_counter = this.counter;
      this.counter = 1;
    }
    let result = this.max_counter;
    this.max_counter = 1
    return result;
  }
};
