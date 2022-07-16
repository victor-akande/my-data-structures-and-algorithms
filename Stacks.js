/* Stack Data Structure */
// common functions: push, pop, peek, length

let letters = [] // this is the stack

let word = 'racecar'

let rWord = ''

// putting letters of a word into the stack

for (let i = 0; i < word.length; i++) {
  letters.push(word[i])
}

// removing from the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rWord += letters.pop()
}