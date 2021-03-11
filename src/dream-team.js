const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  dream_team_name = "";
  for (let i in members) {
    if (typeof members[i] == "string") dream_team_name += members[i].split(" ").join('')[0];
  };
  return dream_team_name.toUpperCase().split('').sort().join('');
};
