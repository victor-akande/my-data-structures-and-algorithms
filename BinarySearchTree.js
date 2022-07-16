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
    
    // Method the find the smallest data in the tree
    Min() {
      let current = this.root
      while (current.left !== null) {
        current = current.left
      }
      console.log(current.data)
      return current.data
    }
  
    // Method to find the largest data in the tree
    Max() {
      let current = this.root
      while (current.right !== null) {
        current = current.right
      }
      console.log(current.data)
      return current.data
    }
    
    // Returns the locations of a specified data
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
  
    // Checks if an inputted data is present in the tree
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

    add(data) {
        const node = this.root
        if (node === null) {
          this.root = new Node(data)
          return
        } else {
          const searchTree = (node) => {
            if (data < node.data) {
              if (node.left === null) {
                node.left = new Node(data)
                return
              } else if (node.left !== null) {
                return searchTree(node.left)
              } else if (data > node.data) {
                if (node.right === null) {
                  node.right = new Node(data)
                  return
                } else if (node.right !== null) {
                  return searchTree(node.right)
                }
              }
            } else {
              throw new Error('Data already exist within the tree')
              return null
            }
          }
        }
      }

      remove(data) {
        const removeNode = (node, data) => {
          if (node == null) {
            return null
          }
          if (data == node.data) {
            // node has no children
            if (node.left == null && node.right == null) {
              return null
            }
            // node has no left child
            if (node.left == null) {
              return node.right
            }
            // node has no right child
            if (node.right == null) {
              return node.left
            }
            // node has TWO children
            let tempNode = node.right
            while (tempNode.left !== null) {
              tempNode = tempNode.left
            }
            node.data = tempNode.data
            node.right = removeNode(node.right, tempNode.data)
            return node
          } else if (data < node.data) {
            node.left = removeNode(node.left, data)
            return node
          } else {
            node.right = removeNode(node.right, data)
            return node
          }
        }
        this.root = removeNode(this.root, data)
      }

  }