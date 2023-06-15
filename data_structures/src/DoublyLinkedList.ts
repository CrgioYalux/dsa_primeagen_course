type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        // set a new node at the head position
        // e.g. let's say we want to prepend the (G) node in (A) <-> (B) <-> (C)
        // (G) will point to (A) first
        // (A) will point to (G)
        // finally, head will point to (G)
        
        const node = {value: item} as Node<T>;

        this.length++;
        if (!this.head) { // if it's an empty list
            this.head = node;
            return;
        }

        node.next = this.head; // (G) -> h
        this.head.prev = node; // (G) <- head (which currently is (A))
        this.head = node;      // h -> (G)
    }

    insertAt(item: T, idx: number): void {
        // inserting within the middle
        // e.g. let's say we want to insert the (F) node at (C) in (B) <-> (C) <-> (D)
        // (F) will point to (C) as its next
        // (F) will point to (B) as its prev
        // (C) prev will point to (F)
        // (B) next will point to (F)
        //
        // Rule: First attach the new node, second break the old links
     
        if (idx > this.length) {
            throw new Error('Trying to insert a node detached because of index');
        } else if (idx === this.length) {
            // we are basically just appending to the list
            this.append(item);
            return;
        } else if (idx === 0) {
            // we are basically just prepending to the list
            this.prepend(item);
            return;
        }
        
        // e.g. given (A) <-> (B) <-> (C) <-> (D) <-> (E)
        // we want to insertAt idx 3 the node (Z), so it should end up as:
        // (A) <-> (B) <-> (C) <-> (Z) <-> (D) <-> (E)
        
        this.length++;
        const curr = this.getAt(idx) as Node<T>;
        const node = {value: item} as Node<T>; // (Z)
        
        node.next = curr;      // (Z).next = (D)
        node.prev = curr.prev; // (Z).prev = (D).prev = (C)
        curr.prev = node;      // (D).prev = (Z)

        if (node.prev) { // if curr.prev = (Z) exists (which it does - just typescript stuff)
            node.prev.next = curr; // curr.prev.next = (D) = (D) 
        }
    }

    append(item: T): void {
        this.length++;

        const node = {value: item} as Node<T>;

        if (!this.tail) { // it's an empty list
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;

        this.tail = node;
    }

    remove(item: T): T | undefined {
        // (A) <-> (B) <-> (C)
        // (A) <-> (C)
        // A.next = C
        // C.prev = A
        //

        let curr =  this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }
        if (!curr) { // not found
            return undefined;
        }

        return this.removeNode(curr);
    }

    get(idx: number): T | undefined { 
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);

        if (!node) { 
            return undefined;
        }

        return this.removeNode(node);
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length++;
        if (this.length == 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if (node.prev) { // if the one to be deleted has a prev, then set it to be its next
            node.prev.next = node.next;
        }

        if (node.next) { // if the one to be deleted has a next, then set it to be its prev
            node.next.prev = node.prev;
        }
        
        if (node === this.head) { // if the one to be deleted is the head, then set the head to be its next
            this.head = node.next;
        }

        if (node === this.tail) { // if the one to be deleted is the tail, then set the tail to be its prev
            this.tail = node.prev;
        }

        node.prev = node.next = undefined; // finally break curr
        return node.value;
    }


    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head; // (A)
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next; // [i = 0] => (B)
                              // [i = 1] => (C)
                              // [i = 2] => (D)  // here the for loop stops since in the next iteration i = 3, and so i isn't < idx
        }
        // we get out of the for loop with curr being equal to (D)

        curr = curr as Node<T>; // (D)
        return curr;
    }
}

