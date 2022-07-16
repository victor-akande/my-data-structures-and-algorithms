/* QUEUES */
// Just like normal queues in real life
// Operates on a first come first serve basis

class Queue {
    constructor() {
      const collection = []
  
      // outputs the queue
      this.print = () => {
        console.log(collection)
      }
  
      // adds an element to the END of the queue
      this.enqueue = (element) => {
        collection.push(element)
        return this // add this line to enable method chaining
      }
  
      // adds multiple elements to the END of the queue (elements are entered and separated by a comma)
      this.Enqueue = (...elements) => {
        elements.forEach((element) => {
          collection.push(element)
        })
      }
  
      // removes the first element on the queue
      this.dequeue = () => {
        return collection.shift()
      }
  
      // returns the first element on the queue without deleting it
      this.first = () => {
        console.log(collection[0])
        return collection[0]
      }
  
      // returns the size of the queue
      this.size = () => {
        return collection.length
      }
  
      // checks if the queue is empty
      this.isEmpty = () => {
        return collection.length === 0
      }
  
      // method checks if the inputted element exists in the queue
      this.has = (element) => {
        return collection.indexOf(element) !== -1
      }
    }
  }
  