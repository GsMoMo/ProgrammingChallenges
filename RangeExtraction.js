// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

const solution = list => recordRange(list).reduce((result, current) => {
  if (Array.isArray(current)) {
    return (current.length > 2) ? result.concat([`${current[0]}-${current[current.length - 1]}`]) : result.concat(current)
  }
  else {
    return result.concat([current])
  }
}, []).join(',')

const recordRange = list => {
  let result = []
  let temp = []
  let resultIndex = 0

  for (let index = 0; index < list.length; index++) {
    if(Math.abs(list[index] - list[index + 1]) !== 1) {
      temp.push(list[index])
      result.push(temp)
      temp = []
      resultIndex++
    } else {
      temp.push(list[index])
    }
  }

  return result
}

console.log(solution([-3, -2, -1, 2, 10, 15, 16, 18, 19, 20]))