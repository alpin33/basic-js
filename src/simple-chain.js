const CustomError = require("../extensions/custom-error")

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${String(value)} )`)
    return this
  },
  removeLink(position) {
    if (isNaN(position) || position < 1 || position > this.chain.length) {
      this.chain = []
      throw new Error()
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  finishChain() {
   
  }
}

module.exports = chainMaker;
