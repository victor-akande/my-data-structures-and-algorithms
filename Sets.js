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
  
    }
  }
