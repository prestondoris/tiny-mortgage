const Mortgage = require('./index.js')

let m = new Mortgage(500000, 20, 4, 30)
let monthly = m.getMonthly()
let monthExp = 1910
let total = m.getTotal()
let totalExp = 687478
assertEqual(monthly, monthExp)
assertEqual(total, totalExp)


m = new Mortgage(1500000, 20, 4, 30)
monthly = m.getMonthly()
monthExp = 5729
total = m.getTotal()
totalExp = 2062434
assertEqual(monthly, monthExp)
assertEqual(total, totalExp)

try {
  m = new Mortgage(1500000, 101, 4, 30)
} catch (error) {
  console.log(error)
}
try {
  m = new Mortgage(1500000, 0, 4, 30)
} catch (error) {
  console.log(error)
}
try {
  m = new Mortgage(1500000, 20, 21, 30)
} catch (error) {
  console.log(error)
}
try {
  m = new Mortgage(1500000, 20, -1, 30)
} catch (error) {
  console.log(error)
}
try {
  m = new Mortgage(1500000, 20, 4)
} catch (error) {
  console.log(error)
}







function assertEqual(a, b) {
  if (a === b) {
    console.log(`Test PASS: ${a} === ${b}`);
  } else {
    console.log(`Test FAIL: ${a} != ${b}`);
  }
}