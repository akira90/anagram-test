const createAnagram = (items) => {
  if (!items || items.length === 0) return []
  let anagrams = {}
  for (let i = 0; i < items.length; i++) {
    // split characters, sort and join them
    const sorted = items[i].split('').sort().join()
    // check if anagram object has the values
    if (anagrams[sorted]) anagrams[sorted].push(items[i])
    else anagrams[sorted] = [items[i]]
  }
  return Object.values(anagrams)
}

module.exports = {
  createAnagram
}