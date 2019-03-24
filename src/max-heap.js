const Node = require('./node');

class MaxHeap {
	constructor() {		
		this.root = null;
		this.parentNodes = [];		
	}

	push(data, priority) {
		const node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if(!this.isEmpty()){
			return detachRoot();
		}			
	}	

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		return this.root === null;
	}

	clear() {
		this.parentNodes = [];
		this.root = null;
	}

	insertNode(node) {
		if(!this.root){
			this.root = node;
			this.parentNodes.push(node);			
		}
		else {	
			const firstParent = this.parentNodes[0];
			firstParent.appendChild(node);
			this.parentNodes.push(node);

			if(firstParent.left && firstParent.right){
				this.parentNodes.shift();
			}
		}
	}

	shiftNodeUp(node) {	
		var parent = node.parent;

		if(parent && (node.priority > parent.priority)){   
			node.swapWithParent();

			if(node.parent === null){
				this.root = node;
			}			

			this.shiftNodeUp(node);
		}
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
