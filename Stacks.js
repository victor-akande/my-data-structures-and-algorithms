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

class Stack {
  constructor() {
    this.count = 0
    this.storage = {}

    // adds and item to the end of the stack
    this.push = (value) => {
      this.storage[this.count] = value
      this.count++
      return this
    }

    // adds multiple items to the end of the stack
    this.add = (...values) => {
      values.forEach((value) => {
        this.storage[this.count] = value
        this.count++
      })
    }

    // removes an item from the end of the stack and returns the removed item
    this.pop = () => {
      if (this.count === 0) {
        return undefined
      } else {
        this.count--
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
      }
    }

    // returns the size of the stack
    this.size = () => {
      return this.count
    }

    // returns the last item on the stack but does not delete it
    this.peek = () => {
      return this.storage[this.count - 1]
    }
  }
}
