const CustomError = require("../extensions/custom-error")

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  const firstLettersNamesArray = members.map((val) => {
    if (typeof val === "string") {
      return val.trim()[0].toUpperCase()
    }
  })
  const secretName = firstLettersNamesArray.sort().join("")
  return secretName
}
