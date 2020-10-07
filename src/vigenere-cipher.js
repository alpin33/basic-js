const CustomError = require("../extensions/custom-error")

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error()
    }
    let newMessage = message.toUpperCase()
    let newKey = key.toUpperCase()
    let newString = ""
    let shift = 0
    for (let i = 0; i < newMessage.length; i++) {
      if (newMessage.charCodeAt(i) >= 65 && newMessage.charCodeAt(i) <= 90) {
        const charIndex =
          (newMessage.charCodeAt(i) -
            65 +
            newKey.charCodeAt((i - shift) % newKey.length) -
            65) %
          this.alphabet.length;
        newString += this.alphabet[charIndex]
      } else {
        shift++;
        newString += newMessage[i]
      }
    }

    return this.direct ? newString : newString.split("").reverse().join("")
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error()
    }
    let newEncryptedMessage = encryptedMessage.toUpperCase()
    let newKey = key.toUpperCase()
    let newString = []
    let shift = 0
    for (let i = 0; i < newEncryptedMessage.length; i++) {
      if (
        newEncryptedMessage.charCodeAt(i) >= 65 &&
        newEncryptedMessage.charCodeAt(i) <= 90
      ) {
        let charIndex =
          (newEncryptedMessage.charCodeAt(i) -
            65 -
            newKey.charCodeAt((i - shift) % newKey.length) -
            65) %
          this.alphabet.length
        if (charIndex < 0) {
          charIndex += 26
        }
        newString += this.alphabet[charIndex]
      } else {
        shift++
        newString += newEncryptedMessage[i]
      }    }
    return this.direct ? newString : newString.split("").reverse().join("")
  }}

module.exports = VigenereCipheringMachine