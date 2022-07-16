class PriorityQueue {
    constructor() {
      const collection = []
  
      this.print = () => {
        console.log(collection)
      }
  
      // adds an element to the queue at the specified priority
      this.enqueue = (element) => {
        if (this.isEmpty()) {
          collection.push(element)
        } else {
          var added = false
          for (var i = 0; i < collection.length; i++) {
            if (element[1] < collection[i][1]) {
              collection.splice(i, 0, element)
              added = true
              break
            }
          }
          if (!added) {
            collection.push(element)
          }
        }
        return this
      }
  
      // removes the first element on the queue
      this.dequeue = () => {
        const value = collection.shift()
        console.log(value[0])
        return value[0]
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
    }
  }
  