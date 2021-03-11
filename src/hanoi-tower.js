const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  min_turns = 2 ** disksNumber - 1;
  min_time = Math.floor((min_turns / turnsSpeed)*60*60);
  obj = { "turns": min_turns, "seconds": min_time };
  return obj;
};
