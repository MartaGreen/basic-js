const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  separator = (typeof options["separator"] == "undefined")? "+" : options['separator']
  addition_separator = (typeof options['additionSeparator'] == "undefined")? "|" : options['additionSeparator'];
  addition = (typeof options['addition'] == "undefined")? "": options['addition'];
  
  let addition_str = "";
  for (let i = 1; i < options["additionRepeatTimes"]; i++) {
    addition_str += addition + addition_separator;
  };
  addition_str += addition
  let the_str = (str + addition_str + separator).repeat(options['repeatTimes']-1);
  the_str += str + addition_str;
  return the_str;
};

  