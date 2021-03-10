const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  count = 0;
  for (let i = 0; i < matrix.length; i++) {
    count += matrix[i].filter(elem => elem == "^^").length;
  }
  return count;
};
