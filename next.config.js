const withTypescript = require('@zeit/next-typescript')
const withESLint = require('next-eslint')

module.exports = withESLint(withTypescript())
