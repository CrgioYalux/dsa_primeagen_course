### Recursion
- Basically, a function that calls itself
- The functions are added to the execution stack (LIFO)
- Think of recursion from the base case
- ```
      tail                       head
    (n + 2)   (n + 1)            (n)
    fn_st1 -> fn_st2 -> ... -> fn_stn
    ret fn_st1 <- ret fn_st2 <- ... <- ret fn_stn
```

### Examples
```
function foo(n: number): number {
    // base case
    if (n === 1 || n === 0) {
        return n;
    }
    return n + foo(n - 1);
}
foo(10) = 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 55
```

### Use cases

- Maze Solver
```
S = start | E = Exit
[
    "#####E#",
    "#     #",
    "#S#####",
]

Base case:
1. It's a wall #
2. Off the map
3. It's the Exit E
4. If we have seen it

```
### When to use
- When there's no defined end



















