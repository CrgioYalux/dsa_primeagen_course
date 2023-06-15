type Node<T> = {
    value: T,
    prev?: Node<T>,
}

export default class Stact<T> {
    public length: number;
    private head?: Node<T>;
    
    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++; // increase length
        if (!this.head) { // there's no head
            this.head = node; // set the head to be the passed node
            return;
        }

        node.prev = this.head; // point the passed node's prev node to the current (for now) head
        this.head = node; // set the head to be the passed node
    }

    pop(): T | undefined { // a <- b <- c <- d (head) => a <- b <- c (head)
        this.length = Math.max(0, this.length - 1); // this way length always stays at 0 when decreasing it
        if (this.length === 0) { // in case there's no nodes left (only the one being popped)
            const head = this.head; // save a
            this.head = undefined; // set head to be undefined
            return head?.value; // return a value
        }

        const head = this.head as Node<T>; // save d
        this.head = head.prev; // set head to be c

        return head.value; // return d value
    }

    peek(): T | undefined { // get the head
        return this.head?.value;
    }

}
