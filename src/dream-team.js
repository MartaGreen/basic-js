const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  members = members.sort();
  dream_team_name = "";
  for (let i in members) {
    if (typeof members[i] == "string") dream_team_name += members[i][0];
  };
  return dream_team_name;
};
