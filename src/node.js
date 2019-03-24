class Node {
	constructor(data, priority) {
		this.data = data;
        this.priority = priority;
        this.parent = null;
        this.left = null; 
        this.right = null; 
	}

	appendChild(node) {
		if(this.left === null){
			this.left = node;
		}
		else if(this.right === null){
			this.right = node;
		}
		node.parent = this;
	}

	removeChild(node) {
		if(this.left === node){
			this.left = null;			
		}
		else if(this.right === node){
			this.right = null;			
		}
		else {
			throw "Error! Passed node is not a child of this node";
		}
		node.parent = null;		
	}

	remove() {
		if(this.parent != null){
			this.parent.removeChild(this);
		  }
	}

	swapWithParent() {
		if (this.parent) {

			const right = this.parent.right;
			const left = this.parent.left;
			const leftChild = (this.parent.left === this);

			if (this.left) {
				this.left.parent = this.parent;
			}
			this.parent.left = this.left;

			if (this.right) {
				this.right.parent = this.parent;
			}
			this.parent.right = this.right;

			if (leftChild) {
				this.left = this.parent;
				this.right = right;

				if (this.right) {
					this.right.parent = this;
				}
			} else {
				this.left = left;
				this.right = this.parent;

				if (this.left) {
					this.left.parent = this;
				}
			}

			const parent = this.parent.parent;

			if (parent) {
				if (parent.left === this.parent) {
					parent.left = this;
				} else {
					parent.right = this;
				}
			}

			this.parent.parent = this;
			this.parent = parent;
		}
	}		
}

module.exports = Node;