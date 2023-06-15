
// unary search
export function linear_search(haystack: number[], needle: number): boolean {

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return true;
        }
    }

    return false
}


// binary search 
// : is also linear search ( O(N) ), but sometimes is more perfomant
// : this algorithm is just usable if the array is sorted

export function binary_search(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    do {
        const midpoint = Math.floor(low + (high - low) / 2);
        const value = haystack[midpoint];

        if (value === needle) {
            return true;
        } else if (value > needle) {
            high = midpoint; // high is exclusive, low is inclusive => [low, high)
        } else {
            // our value is less than our needle
            // we need to search in the greater side
            low = midpoint + 1; // no need to re-check with the midpoint
        }
    } while (low < high);

    return false;
}



export default {
    linear_search,
    binary_search
}
