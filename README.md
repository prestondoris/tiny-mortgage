# Tiny Mortgage
## A Tiny NPM Package to Calculate a Fixed Rate Mortgage

### Installation
`npm install --save tiny-mortgage`

### Usage
`const mortgage = require('tiny-mortgage')`
or
`import mortgage from 'tiny-mortgage`

Get The Monthly Total
- `mortgage.getMonthly()`

Get The Total Amount to be Paid over the life of the loan including interest
- `mortgage.getTotal()`

Get the Principle/Interest Breakdown for a given month in the loan term
- `mortgage.getSpecificMonth()`

