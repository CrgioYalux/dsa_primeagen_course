type BinaryNode<T> = {
    value: T,
    left: BinaryNode<T>
    right: BinaryNode<T>
}

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    // recurse
    // pre
    path.push(curr.value); // first visit

    // recurse
    walk(curr.left, path); // second go left
    walk(curr.right, path); // finally go right

    // post
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}

// ts number type might be, either:
// - a floating point number (nearest 64 bits)
// - an integer up to the 2^53 - 1
