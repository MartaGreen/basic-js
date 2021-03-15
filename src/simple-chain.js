const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: "",
  getLength() {
    let chain_length = this.chain.split("~~").length;
    return chain_length;
  },
  addLink(value) {
    if (this.chain == "") this.chain = "( " + String((typeof value === "undefined")? "": value) + " )";
    else this.chain += "~~( " + String((typeof value === "undefined")? "": value) + " )";
    return this;
  },
  removeLink(position) {
    if (!position || position !== parseInt(position, 10) ||
    position <= 0 || position > this.chain.split("~~").length) throw new Error;
    this.chain = this.chain.split("~~").slice(0,position-1).concat(this.chain.split("~~").slice(position)).join("~~");
    return this;
  },
  reverseChain() {
    let reversed_chain = [];
    for (let i = this.chain.split("~~").length-1; i >= 0; i--) {
      reversed_chain.push(this.chain.split("~~")[i])
    }
    this.chain = reversed_chain.join("~~");
    return this;
  },
  finishChain() {
    let result = this.chain;
    this.chain = "";
    return result;
  },
};

module.exports = chainMaker;
