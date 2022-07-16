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
        // return true;
      } // if the element exits returns an error message
      else {
        console.error(`${element} already exits`)
        // return false;
      }
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
  }
}
