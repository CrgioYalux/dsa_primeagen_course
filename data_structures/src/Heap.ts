export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        // we need to know some things
        
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }
        
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return out;
    }

    // if you have to move through the height of the tree then the BigO is log n

    private heapifyUp(idx: number): void {
        // easier
        // 1. there's only one value to look up: the parent
        // 2. keep doing until:
        // a. off the board
        // b. is larger
        
        if (idx === 0) {
            return;
        }

        const parentIdx = this.parent(idx);
        const parentValue = this.data[parentIdx];
        const value = this.data[idx];

        if(parentValue > value) {
            // need to go up
            this.data[idx] = parentValue;
            this.data[parentIdx] = value;

            this.heapifyUp(parentIdx);
        }
    }

    private heapifyDown(idx: number): void {
        // less easier
        // 1. have to find the minimun child
        // 2. do the comparison
        // 3. swap
    
        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);

        if (idx >= this.length || leftIdx >= this.length) {
            return;
        }

        const leftValue = this.data[leftIdx];
        const rightValue = this.data[rightIdx];
        const value = this.data[idx];

        if (leftValue > rightValue && value > rightValue) {
            this.data[idx] = rightValue;
            this.data[rightIdx] = value;
            this.heapifyDown(rightIdx);
        } else if (rightValue > leftValue && value > leftValue) {
            this.data[idx] = leftValue;
            this.data[leftIdx] = value;
            this.heapifyDown(leftIdx);
        }
    }


    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }

    
    // (idx - 1) / 2
}
