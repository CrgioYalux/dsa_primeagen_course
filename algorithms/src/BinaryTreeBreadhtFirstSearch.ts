type BinaryNode<T> = {
    value: T,
    left: BinaryNode<T> | null,
    right: BinaryNode<T> | null
}

/*
 while q.notEmpty()
    next = q.deque()
    q.enqueue(next.L)
    q.enqueue(next.R)
*/


export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    // does not require recursion
    const q: (BinaryNode<number> | null)[] = [head]; // queue
    
    while (q.length) {

        const curr = q.shift() as BinaryNode<number> | undefined | null;
        if (!curr) {
            continue;
        }

        // search 
        if (curr.value === needle) {
            return true;
        }

        q.push(curr.left);
        q.push(curr.right);
    }

    return false;
}
