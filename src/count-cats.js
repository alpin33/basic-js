const CustomError = require("../extensions/custom-error")

module.exports = function countCats(backyard) {
  const newBackyard = backyard.flat()
  const catsArray = newBackyard.filter((val) => val === "^^")
  const catsCount = catsArray ? catsArray.length : 0
  return catsCount
}
