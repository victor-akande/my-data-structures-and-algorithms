class mySet {
  constructor() {
    // this array holds the set
    let collection = []

    // method checks if the inputted element exists in the set
    this.has = (element) => {
      return collection.indexOf(element) !== -1
    }

    // returns and displays all the values in the set
    this.values = () => {
      console.log(collection)
      return collection
    }

    // method adds an element to the set
    this.add = (element) => {
      // performing a check to find out if the element being passed already exists in the set
      if (!this.has(element)) {
        collection.push(element)
      } // if the element exits returns an error message
      else {
        console.error(`${element} already exits`)
      }
      return this // added this line to enable method chaining
    }

    // this method removes the element (passed into it as an argument) from the set
    this.remove = (element) => {
      if (this.has(element)) {
        index = collection.indexOf(element)
        collection.splice(index, 1)
      }
    }

    // returns the size of the set
    this.size = () => {
      console.log(collection.length)
      return collection.length
    }

    // This is a better alternative to the add() method
    // method allows user to add multiple elements to the set at once (using the spread operator and forEach)
    this.pushItems = (...elements) => {
      elements.forEach((element) => {
        // performing a check to find out if the element being passed already exists in the set
        if (!this.has(element)) {
          collection.push(element)
          return true
        } // if the element exits returns an error message
        else {
          console.error(`${element} already exits`)
          return false
        }
      })
    }

    // creates a new set containing items in the already defined set and a set being passed into the method
    this.union = (anotherSet) => {
      const unionSet = new mySet()
      const setOne = this.values()
      const setTwo = anotherSet.values()
      setOne.forEach((element) => {
        unionSet.add(element)
      })
      setTwo.forEach((element) => {
        unionSet.add(element)
      })

      console.log(unionSet)
      return unionSet
    }

    // creates a new set containing items present in the already defined set and a new set being passed into the method
    this.intersection = (otherSet) => {
      const intersectionSet = new mySet()
      const setOne = this.values()

      setOne.forEach((element) => {
        if (otherSet.has(element)) {
          intersectionSet.add(e)
        }
      })

      console.log(intersectionSet)
      return intersectionSet
    }
  }
}
