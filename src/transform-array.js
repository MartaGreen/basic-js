const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (typeof arr != "object") throw new Error();
  result_arr = Array.from(arr);
  for (let i = 0; i < result_arr.length; i++) {
    if (result_arr[i] == "--discard-next") {
      if (i == arr.length - 1) {
        result_arr.splice(-1, 1);
        break;
      }

      if (
        arr[i + 2] == "--discard-prev" ||
        arr[i + 2] == "--discard-next" ||
        arr[i + 2] == "--double-next" ||
        arr[i + 2] == "--double-prev" ||
        arr[i + 1] == "--discard-prev" ||
        arr[i + 1] == "--discard-next" ||
        arr[i + 1] == "--double-next" ||
        arr[i + 1] == "--double-prev"
      ) {
        result_arr.splice(i, 3);
      } else result_arr.splice(i, 2);

      i -= 1;
    }
    if (result_arr[i] == "--discard-prev") {
      if (i == 0) {
        result_arr.splice(0, 1);
        break;
      }

      if (
        arr[i + 1] == "--discard-prev" ||
        arr[i + 1] == "--discard-next" ||
        arr[i + 1] == "--double-next" ||
        arr[i + 1] == "--double-prev"
      ) {
        result_arr.splice(i - 1, 3);
      } else result_arr.splice(i - 1, 2);

      i -= 2;
    }
    if (result_arr[i] == "--double-next") {
      if (i == arr.length - 1) {
        result_arr.splice(-1, 1);
        break;
      }

      if (
        arr[i + 1] == "--discard-prev" ||
        arr[i + 1] == "--discard-next" ||
        arr[i + 1] == "--double-next" ||
        arr[i + 1] == "--double-prev"
      ) {
        result_arr.splice(i + 1, 1);
      }
      result_arr[i] = result_arr[i + 1];
    }
    if (result_arr[i] == "--double-prev") {
      if (i == 0) {
        result_arr.splice(0, 1);
        break;
      }

      if (
        arr[i + 1] == "--discard-prev" ||
        arr[i + 1] == "--discard-next" ||
        arr[i + 1] == "--double-next" ||
        arr[i + 1] == "--double-prev"
      ) {
        result_arr.splice(i + 1, 1);
      }
      result_arr[i] = result_arr[i - 1];
    }
  }
  return result_arr;
};
