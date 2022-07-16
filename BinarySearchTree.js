// Binary Search Tree

class Node {
    constructor(data, left = null, right = null) {
      data
      left
      right
    }
  }
  
  class BST {
    constructor() {
      this.root = null
    }
    
    Min() {
      let current = this.root
      while (current.left !== null) {
        current = current.left
      }
      console.log(current.data)
      return current.data
    }
  
    Max() {
      let current = this.root
      while (current.right !== null) {
        current = current.right
      }
      console.log(current.data)
      return current.data
    }
  
    find(data) {
      let current = this.root
      while (current.data !== data) {
        if (data < current.data) {
          current = current.left
        } else {
          current = current.right
        }
        if (current === null) {
          return null
        }
      }
      console.log(current)
      return current
    }
  
    isPresent(data) {
      let current = this.root
      while (current) {
        if (data === current.data) {
          return true
        }
        if (data < current.data) {
          current = current.left
        } else {
          current = current.right
        }
      }
      return false
    }
  }