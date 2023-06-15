// Divide and conquer strategy

function qs(arr: number[], low: number, high: number): void {
    if (low >= high) {
        return;
    }

    const pivotIdx = partition(arr, low, high); // with Ex (A), it will return 2

    // now the array has been partitioned 
    // [2 ,4] <= arr[pivotIdx = 2] = pivot = 5 <= [7, 8]

    qs(arr, low, pivotIdx - 1); // qs([2, 4, 5, 7, 8], 0, 2 - 1 = 1); low < high so it runs again
    qs(arr, pivotIdx - 1, high); // qs([2, 4, 5, 7, 8], 2 - 1 = 1, arr.length - 1 = 5 - 1 = 4); low < high so it runs again
}

function partition(arr: number[], low: number, high: number): number { // returns the pivot index
    const pivot = arr[high]; // set the last element in the arr as the pivot
    let idx = low - 1; // idx (to use to swap) is set to be the low bound less 1, so if low = 0, then idx = -1 (it's fine)
    
    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) { // for loop the array and check for elements that are less or equal than the pivot
            idx++; // increase the idx (since it was 0 from initialization, in i = 0 it will be 0)

            // basically swap
            const tmp = arr[i]; // save the element at i position
            arr[i] = arr[idx]; // set the element at i position to be the element at idx position (in i = 0, it will be 0)
            arr[idx] = tmp; // set the element at idx position (in i = 0, it will be 0) to be the element that fulfilled with being <= than the pivot
        }
    } 
    // all those numbers that are lower than the pivot are switch to the left
    // Ex (A)
    // 1. [8, 7, 2, 4, (5)]; pivot is 5
    // 2. for loop the arr, check what numbers are lower or equal than the pivot and move them to the left (with idx)
    // 3. [2, 7, 8, 4, (5)]; switch 8 = arr[idx = 0] <-> arr[2] = 2
    // 4. [2, 4, 8, 7, (5)]; switch 7 = arr[idx = 1] <-> arr[3] = 4

    idx++; // increase once more idx since we now need to set the (before this line) arr[idx] element's next element to be the pivot
    // basically swap
    arr[high] = arr[idx];
    arr[idx] = pivot;
    // now what's left is to switch the pivot to the following position after the last number that was re-positioned (with idx)
    // 5. [2, 4, (5), 7, 8]; switch 8 = arr[idx = 2] <-> arr[4] = 5
    // it's literally sorted already

    return idx; // return the index of the used pivot's current position after swap
}

export default function quick_sort(arr: number[]): void {
    // [low, high]

    qs(arr, 0, arr.length - 1);
}
