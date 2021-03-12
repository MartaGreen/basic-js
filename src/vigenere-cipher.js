const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(val) {
    this.value = val;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error();
    message = message.toLowerCase();
    key = key.toLowerCase();
    let encrypted_msg = "";
    let encrypted_index = 0;

    for (let i = 0; i < message.length; i++) {
      if (message[i].toUpperCase() != message[i].toLowerCase()) {
        let encrypted_idx = ((message[i].charCodeAt() -97 +key[encrypted_index].charCodeAt()-97)%26) + 97;
        encrypted_msg += String.fromCharCode(encrypted_idx);
        if (encrypted_index == key.length - 1) encrypted_index = 0;
        else encrypted_index += 1;
        
      } else encrypted_msg += message[i];
    }

    if (this.value == true || typeof this.value == "undefined")
      return encrypted_msg.toUpperCase();
    else return encrypted_msg.toUpperCase().split("").reverse().join("");
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error();
    message = message.toLowerCase();
    key = key.toLowerCase();
    let decrypted_msg = "";
    let decrypted_index = 0;

    for (let i = 0; i < message.length; i++) {
      if (message[i].toUpperCase() != message[i].toLowerCase()) {
        let decrypted_idx = message[i].charCodeAt() - 97 - (key[decrypted_index].charCodeAt() - 97);
        if (decrypted_idx < 0) decrypted_idx = 26 + decrypted_idx;
        decrypted_msg += String.fromCharCode(decrypted_idx + 97);

        if (decrypted_index == key.length - 1) decrypted_index = 0;
        else decrypted_index += 1;

      } else decrypted_msg += message[i];
    }
    if (this.value == true || typeof this.value == "undefined")
      return decrypted_msg.toUpperCase();
    else return decrypted_msg.toUpperCase().split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
