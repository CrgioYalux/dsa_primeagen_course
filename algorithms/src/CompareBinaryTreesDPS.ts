type BinaryNode<T> = {
    value: T,
    left: BinaryNode<T> | null,
    right: BinaryNode<T> | null,
}

function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    if (a === null && b === null) { // base case 1
        return true;
    }

    if (a === null || b === null) { // base case 2
        return false;
    }

    if (a.value !== b.value) { // base case 3
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right); // wow
}

export {
    BinaryNode,
    compare
}
