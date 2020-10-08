# Tiny Mortgage
## A Tiny NPM Package to Calculate a Fixed Rate Mortgage

### Installation
`npm install --save tiny-mortgage`

### Usage
`const Mortgage = require('tiny-mortgage')`

`const m = new Mortgage(700000, 20, 4, 30)`

### Parameters
The Mortgage class takes 4 parameters all of which are required.
1. Total Cost of the house
2. Down Payment Percentage (represented as a whole number between 1 - 100)
3. Interest Rate (represented as a whole number between 0-20)
4. Number of Years of the Loan

### Methods
Get The Monthly Total
- `m.getMonthly()`

Get The Total Amount to be Paid over the life of the loan including interest
- `m.getTotal()`

Get the Principle/Interest Breakdown for a given month in the loan term
- `m.getSpecificMonth(124)`
- For a 30 year Fixed Rate Loan: 1 - 360
- For a 15 year Fixed Rate Loan: 1 - 180

