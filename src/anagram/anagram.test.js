const { createAnagram } = require('./anagram')

describe('createAnagram', () => {
  it('should return empty array if no items are found', () => {
    expect(createAnagram([])).toEqual([])
  });
  it('should find anagrams and group them based on the result', () => {
    const items = ['abc', 'fun', 'bac', 'cba', 'unf', 'hello']
    const expected = [['abc', 'bac', 'cba'], ['fun', 'unf'], ['hello']]
    const actual = createAnagram(items)

    expect(actual).toEqual(expected)
  });
})