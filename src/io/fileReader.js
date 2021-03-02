const { createReadStream, existsSync } = require('fs')

const readFile = (file, func) => {
  if (!existsSync(file)) throw new Error(`File does not exist: ${file}`)
  const items = []
  const reader = createReadStream(file)
  reader.on('data', (chunk) => {
    items.push(chunk.toString())
  })
  reader.on('end', () => {
    if (items.length > 0) func(items)
  })
  return items
}

module.exports = {
  readFile
}