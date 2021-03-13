const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== "[object Date]") throw new Error;
  seasons = {
    0: {"days": 31, "season": "winter"},
    1: {"days": ( (date.getFullYear()%4 == 0 && date.getFullYear()%100 != 0) || date.getFullYear()%400 == 0 )? 29:28, "season": "winter"},
    2: {"days": 31, "season": "spring"},
    3: {"days": 30, "season": "spring"},
    4: {"days": 31, "season": "spring"},
    5: {"days": 30, "season": "summer"},
    6: {"days": 31, "season": "summer"},
    7: {"days": 31, "season": "summer"},
    8: {"days": 30, "season": "autumn"},
    9: {"days": 31, "season": "autumn"},
    10: {"days": 30, "season": "autumn"},
    11: {"days": 31, "season": "winter"}
  }
  
  return seasons[date.getMonth()]["season"];
};
