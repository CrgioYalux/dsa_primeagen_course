# Big O

So, what's Big O?
: It's a way of aproximate an algorithm complexity and performance based on its computation and memory usage. (*first iteration def.*)

## Rules
- Constants are omitted: O(N + k) = O(N)
- Factors are omitted: O(kN) = O(N)

# Examples

### (A) How does our program's execution time grow respect to input?

```
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}
```

It's a for loop that goes through a `n` length array and executes some instruction on each iteration.
So, for now, we know that:
- The for loop has to execute the length of the string, which means that if the string grows by 50%, the function is a 50% slower.

If we generalize that statement, we get
: The algorithm runs n times. If n increases by x, then the algorithm requires x more computation and memory usage.
: There's a **linear** growth.

> (A) is O(N), then.

### (B)

# More examples (from Primeagen git)
```
git clone git@github.com:ThePrimeagen/kata-machine.git
```

# Uses
- In interviews: they always ask about the BigO of the worst case scenario for an algorithm.

