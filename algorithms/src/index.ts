// import algo from "./linear_search";
// Linear Search

// const arr: number[] = [...Array(10 ** 6).keys()].map((_, i) => i);
//
// console.time('start');
// const found25 = algo.linear_search(arr, 25);
// console.timeEnd('start');
// console.log({ found25 });


// import bubble_sort from "./bubble_sort";
// // Bubble Sort
// const arr = [5,2,6,1,7,3,6,5,56,7,82,2,4,555, 0, -5];
// console.log({ before: arr });
// bubble_sort(arr);
// console.log({ after: arr });


// import solve from './MazeResolve';
//
// const maze: string[] = [
//     "######  E",
//     "##     ##",
//     "#  ######",
//     "##      #",
//     "####### S",
// ];
//
// console.log(maze);
// console.log(solve(maze, '#', {x: 8, y: 4}, {x: 8, y: 0}));
//

import { BinaryNode, compare } from "./CompareBinaryTreesDPS";


const a: BinaryNode<number> = { 
        value: 8,
        left: null,
        right: {
            value: 10,
            left: {
                value: 5,
                left: {
                    value: 0,
                    left: null,
                    right: null
                },
                right: null
            },
            right: {
                value: 15,
                left: null,
                right: {
                    value: 256,
                    left: null,
                    right: null
                }
            }
        }
    };

const b: BinaryNode<number> = { 
        value: 8,
        left: null,
        right: {
            value: 10,
            left: {
                value: 5,
                left: {
                    value: 0,
                    left: null,
                    right: null
                },
                right: null
            },
            right: {
                value: 15,
                left: null,
                right: {
                    value: 256,
                    left: null,
                    right: null
                }
            }
        }
    };

const c: BinaryNode<number> = { 
        value: 8,
        left: null,
        right: {
            value: 10,
            left: {
                value: 5,
                left: {
                    value: 0,
                    left: null,
                    right: null
                },
                right: null
            },
            right: {
                value: 77, // small change 15 => 77
                left: null,
                right: {
                    value: 256,
                    left: null,
                    right: null
                }
            }
        }
    };

console.log(compare(a, b));
console.log(compare(a, c));

