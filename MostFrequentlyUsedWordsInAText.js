// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]
// Bonus points (not really, but just for fun):
// Avoid creating an array whose memory footprint is roughly as big as the input text.
// Avoid sorting the entire array of unique words.

const topThreeWords = text => {
  let sum = {}

  for (let word of text.toLowerCase().split(' ')) {
    if (/[a-z]/g.test(word) === false) continue
    word = word.replace(/\/\//g, '')
    if (sum[word] === undefined) sum[word] = 1
    else sum[word]++
  }

  const sortedArray = Object.entries(sum).sort((a, b) => b[1] - a[1])
  
  if (sortedArray.length >= 3) return [sortedArray[0][0], sortedArray[1][0], sortedArray[2][0]]
  else if (sortedArray.length === 2) return [sortedArray[0][0], sortedArray[1][0]]
  else if (sortedArray.length === 1) return [sortedArray[0][0]]
  else return []
}

const improvedTopThreeWords = text => {
  let counters = {}

  text.toLowerCase().replace(/([A-Za-z][A-Za-z']*)/g, match => {
    let count = counters[match] || 0
    counters[match] = ++count
  })

  return Object.keys(counters).sort((a, b) => counters[b] - counters[a]).slice(0, 3)
}

console.log(improvedTopThreeWords('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e')) //[ "won't", 'wont' ]