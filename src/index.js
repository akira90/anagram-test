const { readFile } = require('./io/fileReader')
const path = require('path')

const print = (data) =>
  console.log('line: ' + data)

// absolute path with the files
const file = path.join(`${__dirname}${process.argv.slice(2)}`)

// execute the program
readFile(file, print)

