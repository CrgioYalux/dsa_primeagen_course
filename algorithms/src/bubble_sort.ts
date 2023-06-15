/*
* IDEA:
* [          ]
* 0          N
* i i+1      N - 1
*
* for i..n
*   for j..n-1-i
*       if (arr[i] > arr[j])
*           swap(i, j)
* */

export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
