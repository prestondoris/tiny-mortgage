Number.prototype.decimalPlaces = function (digits) {
  return Number(this.toFixed(digits))
}

class Mortgage {
  constructor(cost=null, downpayment=null, anunalInterest=null, loanTerm=null) {
    if (cost === null || downpayment === null || anunalInterest === null || loanTerm === null) {
      throw Error('Mortgage Parameters were not properly provided. Please provide a Cost, Downpayment, Annual Interest Rate, and Loan Term in that order when instantiating a new Mortgage Class')
    }
    
    if(downpayment < 1 || downpayment >=100 ) {
      throw Error('Downpayment should be a value between 1-100')
    }

    if (anunalInterest < 0 || anunalInterest > 20) {
      throw Error('Interest should be a value between 0-20')
    }

    this.cost = cost
    this.downpayment = downpayment/100
    this.anunalInterest = anunalInterest/100
    this.totalMonths = loanTerm*12
    this.monthlyPayment = this.calculateMonthly()
    this.lifeOfLoan = this.getMonthlyBreakdown()
  }

  calculateMonthly(){
    let principle = this.cost - this.downpayment*this.cost
    let interest = this.anunalInterest / 12;
    let firstPow = Math.pow((1 + interest), this.totalMonths)
    let secondPow = Math.pow((1 + interest), (this.totalMonths))
    return principle * (interest * firstPow) / (secondPow - 1)
  }

  getMonthly() {
    return this.monthlyPayment.decimalPlaces(0)
  }

  getTotal() {
    let totalCost = this.monthlyPayment * this.totalMonths
    return totalCost.decimalPlaces(0)
  }

  getMonthlyBreakdown() {
    let monthlyInterest = this.anunalInterest/12
    let loanAmount = this.cost - this.downpayment*this.cost
    let data = {loanAmount: loanAmount}

    for(let i=1; i<=this.totalMonths; i++) {
      let monthlyInterestPayment = loanAmount*monthlyInterest
      let principle = this.monthlyPayment - monthlyInterestPayment
      loanAmount -= principle
      data[i] = { loanTotalAfterPayment: loanAmount.decimalPlaces(2), interest: monthlyInterestPayment.decimalPlaces(2), principle: principle.decimalPlaces(2)}
    }
    return data
  }
  
  getSpecificMonth(month) {
    if(month > this.totalMonths) return undefined
    let curMonth = this.lifeOfLoan[month]
    let interest = curMonth.interest
    let principle = curMonth.principle
    let newLoanAmount = curMonth.loanTotalAfterPayment

    return {interest, principle, newLoanAmount}
  }

}

module.exports = Mortgage