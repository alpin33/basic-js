const CustomError = require("../extensions/custom-error")

module.exports = class DepthCalculator {
  calculateDepth(arr) {if (!Array.isArray(arr)) {
    return 0   }
  if (!arr.length) {
    arr.push(1)  }
  return 1 + Math.max(...arr.map((value) => this.calculateDepth(value)))
     }}