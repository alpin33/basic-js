const CustomError = require("../extensions/custom-error")

const MODERN_ACTIVITY= 15
const HALF_LIFE_PERIOD= 5730

module.exports = function dateSample(sampleActivity) {
  const SAMPLE_ACTIVITY = parseFloat(sampleActivity)
  if (
    isNaN(SAMPLE_ACTIVITY) ||
    SAMPLE_ACTIVITY <= 0 ||
    SAMPLE_ACTIVITY > 15 ||
    typeof sampleActivity !== "string"
  ) {
    return false
  }
  const rateConstant = 0.693 / HALF_LIFE_PERIOD
  const elapsedTime =
    Math.log(MODERN_ACTIVITY / SAMPLE_ACTIVITY) / rateConstant
  return Math.ceil(elapsedTime)   
}
