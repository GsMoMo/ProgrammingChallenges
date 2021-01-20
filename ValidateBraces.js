const validBraces = (braces) => {
  bracesArray = braces.split("")
  return validateBracesArray(bracesArray)
}

const validateBracesArray = (bracesArray) => {
  let stack = []
  let result = true

  for (let brace of bracesArray) {
    if (isOpenBrace(brace)) stack.push(brace)
    else {
      result = validateClosing(stack.pop(), brace)
      if (result === false) return false
    }
  }

  result = (stack.length === 0)
  
  return result
}

const isOpenBrace = (brace) => (brace === '{' || brace === '[' || brace === '(')
const isCloseBrace = (brace) => (brace === ')' || brace === ']' || brace === ')')
const validateClosing = (openBrace, closeBrace) => (openBrace === '{' && closeBrace === '}') || (openBrace === '[' && closeBrace === ']') || (openBrace === '(' && closeBrace === ')')

console.log("validBraces = ", validBraces("(((({{"))