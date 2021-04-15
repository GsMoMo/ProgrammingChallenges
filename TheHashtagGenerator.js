// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

const generateHashtag = str => {
  if (str.length === 0) {
    return false
  }

  let output = str.split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join('')

  return (output.length >= 140 || output.length === 0)? false : '#' + output
}

console.log(generateHashtag('Do We have A Hashtag'))