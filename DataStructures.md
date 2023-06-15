### Arrays
- Fixed capacity

```
const thisIsActuallyNotAnArray = [];
```

### ArrayList
- Uses the array as the fundamental based data structure and adds methods and properties for flexibility
- Variable capacity
- Answers to the question: 'Can we have array-like access (i.e. arr[i]) with the ability to grow (unfixed cap.)?'
- Whiteboard:
```
[2,   ]    Lenght: 1 | Capacity: 3
0     3

get(idx)
    if idx >= len
        throw error

push(val: T) // constant runtime
    if length < capacity // if the length is within the capacity
        arr[length] = val
        length++

pop(): T | undefined
    return arr[length]

what happens with push when we exceed the capacity?
: just create a new array, with more capacity, and then copy the values from the old one to the new one
: that's what an arraylist does under the hood, that's how it allows to have a variable capacity
: this is obviusly a O(N) operation because it copies all the values


```

### Linked List
- Has unidirectional arrows
- e.g.
```
Node<T>
    val: T
    next?: Node<T>

A -> B -> C -> D 
- The BigO notation for the insertion of a new node would be O(1), because it's not based in any inputs
- It's not based on the amount of nodes that the linked list could have nor in the size of each node's value
- It's based on 4 links (which are constants) and its operations (also constants)
```

### Bidirectional Linked List
- e.g.
```
Node<T>
    val: T
    next?: Node<T>
    prev?: Node<T>

A <-> B <-> C <-> D 

Let's say we want to delete the C Node:
we'd do the following:

D = C.next
B = C.prev
B.next = ~C.next~ (D)
D.prev = C.prev
C.prev = C.next = null
return C.val (optional)

The BigO notation for the deletion would also be O(1), because it's not based in any inputs

Operations (and their costs):
- Prepend/append: constant time (just insert and break the links from head or tail)
- Insertion in the middle: constant too but can be costly based on the involved node values
- Deletion from ends: just as prepend/append
- Deletion in the middle: just as insertion in the middle
- get head/tail: constant time
- get in geneneral: constant time

### 
interface LinkedList<T> {
    get length(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(index: number): T | undefined;
}
```

### Linked List are basically trees|graphs

### Queue
- One of the most common data structure
- It's a specific implementation of a linked list
- It's a FIFO structure (First In First Out)
- Whiteboard:
```
[OUT] (A) -> (B) -> (C) -> (D) [IN]
       h                    t

Insert (only at the end|tail):
[OUT] (A) -> (B) -> (C) -> (D) / -> (E) [IN]
       h                    t(old)   |
                                     t(new)
this.tail.next = E
this.tail = E

Delete (only at the start|head):
[OUT] (A) -> / (B) -> (C) -> (D) [IN]
       h(old)   |
                h(new)
h = head
head = head.next
h.next = null
return h.val

Operations (and their costs):
Insertion/Delete: O(1)
```

### Stack
- The opposite of a queue
- It's a LIFO
- Add/Remove from the head
```
[OUT] (A) <- (B) <- (C) <- (D) [IN]
       t                    h
```

### Arrays vs Linked List

### Array Buffer (AKA Ring Buffer)
- An arraylist-like list
- add at this.tail % len

### So what data structure are Javascript arrays
- In javascript, this is not an array. This is because arrays have a fixed size/capacity, which is the max.
  amount of values that it can store, and is not the same as its length, which is the actual amount of values that it stores.
- They are not actual arrays
- Empirically discover what do javascript arrays actually are:
```
Test:
Trying to measure the time cost of running all of these operations:
N being some big number
- get : time([...][i])
- push / pop : time([...].push|pop(N))
- un/shift : time([...].shift|unshift(N))

Results:
- get : O(1), constant
- push / pop : O(1), constant
- shift / unshift : O(N), linear

This empirical test allows us to resolve that:
Given that shift and unshift operations are O(N), we can now say that javascript arrays
are not actually arrays, but array lists, some sort of queue-like data structure

Why this happens:
Basically, the shift operation removes and returns the first value in the queue (the head), 
but for this it must move the rest to their node_i.prev node's position and for that you need a for loop
That's why it's O(N)


[1,2,3,4]
[1,2,3,4].shift() 
[_,2,3,4];
[2,_,3,4];
[2,3,_,4];
[2,3,4,_];
[2,3,4];

///

arr.slice(i, j): creates a copy of the values between [i, j] memory positions from where arr is located. It's a linear operation.
```

### Regex are graphs

### Trees
- A list with multiple paths
- All programming eventually leeds to treesa
- All data structures eventually become graphs, and all of them are actually graphs
- E.g. of trees:
    - Filesystems
    - The DOM
    - In Compilers with Abstract Syntax Tree
- Terminology for trees:
    - root: the most parent node
    - height: the longest path from the root to the most child node
    - binary tree: a tree in which has at most 2 children (max), at least 0 children (min)
    - general tree: a tree with 0 or more children
    - binary search tree: a tree in which has a specific ordering to the nodes and at most 2 children
    - leaves: a node without children
    - balanced: a tree is perfectly balanced when any node's left and right children have the same height
    - branching factor: the amount of children a tree has
- Whiteboard:
```
Node<T>
    value: T
    children: []
```
- Implementing them operations
```
- Find: (B)inary(S)earch(T)ree

It's like QuickSort.
The one and only rule that has to be applied to be able to do this:
- To the left everything is less or equal
- To the right everything is higher

find(node, value): boolean
    if !node
        return false
    if node.value === value
        return true
    if node.value < value
        return find(node.right, value)
    return find(node.left, value)

- Insertion 
insert(node, value)
    if node.value < value
        if !node.right
            // create the node
        else
            insert(node.right, value) 
    else if node.value >= value
        if !node.left
                // create the node
        else
            insert(node.left, value)

- Deletion
cases for it to be doable:
1. the node to be deleted has no children
2. the node to be deleted has only one child whose parent will be the root (or what we decide to set as)
3. find the smallest in the big side, or find the biggest in the small side
4. Use the side with the tallest height
```

### Traversal
- Is O(N)
- They use a lot of recursion
- Basically the different ways in which you can visit the nodes of a tree

- These following types of traversals are known as **Depth First Search**, they use a stack
- With the recursion you are just basically pushing and popping functions in and out of the stack
- pre order : first visited the node, then the recursion
```
given the following tree:

             (21)
      (3)  < (18)
(7) <
      (23) < (4)
             (5)
             
visitNode()
recurseLeft()

will result in : (7), 23, 5, 4, 3, 18, 21 
the root is at the start
```
- in order: 
```
visitNode()
recurseRight()

will result in : 5, 23, 4, (7), 18, 3, 21
the root is in the middle
```
- post order: first recurse, then visit
```
e.g. of the op: at 7, go left, go left, at 5 and visit, ... 

will result in : 5, 4, 23, 18, 21, 3, (7)
the root is at the end
```

- But there's also a **Breadth First Search**, they use a queue
- One use of this is printing a tree in a tree-like view
```
given the following tree:

             (21)
      (3)  < (18)
(7) <
      (23) < (4)
             (5)

will result in : 7, 23, 3, 5, 4, 18, 21


```


### Strong vs Weak Ordering
- Weak: not a strict order (e.g. heap), not out a order but in a order that is weak

### Rules
- Running time is always the growth with respect to the input
- Queues (FIFO) and stacks (LIFO) are opposites

### Priority Queue (AKA Heap Data Structure)
- It's a binary tree where every child and grand child is smaller (MaxHeap), or larger (MinHeap) than the current node
- Whenever a node is added, we must adjust the tree (by bubbling up or down the node)
- Whenever a node is deleted, we must adjust the tree
- There is no traversing the tree, it's possible tho (with BS)
- It is self balancing 
- It can be used to implement priority

### Trie (when it's not a priority queue)
- Pronounced like Tree (it's named after Re'trie'val Tree). AKA try trees, prefix, digital tree.
- Appear very frequently in interviews
- The easist way to visualize a trie is to think of auto complete.
- Whiteboard:
```
trie: how it works
e.g. English language trie (spell-checker)

for this case, the trie can have 1 of 26 possible symbols
there's a root, and from it start nodes which represent letters
the path created by linked nodes create words
```

### Graphs
- So many problems eventually become graphs problems
- Terminology
    - cycle: when you start at Node(x), follow the links, and end back at Node(x)
    - acyclic: a graph that contains no cycles
    - connected: when every node has a path to another node
    - undirected: !directed. directed: ((A) <-> (B))
    - weighted: the edges have a weight associated with them, think maps
    - dag: directed, acyclic graph
- Implementation terms
    - node: a point or vertex on the graph
    - edge: the connection betxit two nodes
- Big O
    - is commonly stated in terms of V and E where V stands for vertices and E stands for edges
    - So O(V * E) means that we will check every vertex, and on every vertex we check every edge
- Operations
    - Adjancency List
    ```
    given the graph:
 
       10
    (0)->(1)
     ^ \  ^
     | 5\ |
     |   v|
    (2)<-(3)

    display as a list of objects, of a link type, aka a list of edges
    where the link type could be, e.g.

    type link = {
        to: number,    // represents a node with whom the node at this idx position in the array has a link (points to it)
        weight: number // represents the weight of the link (from the node at the idx position in the array to the pointed node)
    }
    
    Basically you'll have a outer array that contains everything, and then inner arrays that will contain 
    the links for the node whose identifier happens to be its index in the outer array

    then the graph will end up as, e.g.

    adjL = [
         [ { to: 1, weight: 10 },
           { to: 3, weight: 5 } ], // adjL[0] = the (0) node
           ...                     // and so on with the rest of nodes
    ]


    ```
    - Adjancency Matrix 
    ```
    given the graph:
 
       10
    (0)->(1)
     ^ \  ^
     | 5\ |
     |   v|
    (2)<-(3)

    display as a matrix (i.e. number[][]):
    [   0   1   2   3
    0  [0,  10, 0,  0]
    1  [0,  0,  0,  0]
    2  ...
    3  and so on
    ]
    
    the indexes i and j represent the nodes, and the values in the inner arrays represent the weight of their links
    ```
- Basic Searchs
    - BFS and DFS still exist on a graph
    - They are virtually no different than on a tree
- Implementations
    - BFS on Adj. Matrix
    - DFS on Adj. List
- BigO: O(V + E) - will have to visit every edge and node once at least
- Dijkstra's Shortest Path
    - Do not allow negatives weights
    
### HashMap
- Provides fast indexing
- Uses a Key and a Value

### LRU (Least Recently Used) Cache
- Cache is some sort of container that contains a value
- Uses Linked List and HashMap
- By using a hashmap you can fastly retrieve information from the linked list
```
v = value
MRU = Most Recently Used
LRU = Least Recently Used

MRU                         LRU
[v0] <-> [v1] <-> [v2] <-> [v3]

let's say that the user asks for v2
this structure then has the react by doing the following

MRU                         LRU
[v2] <-> [v0] <-> [v1] <-> [v3] (A)

Ex:
With the HashMap, the Key is the identifier for what the user is looking for
and the Value is basically the node in the LinkedList that contains the
actual thing that the user is looking for

Big O of (A) will be 7O(1); Why 7?
1. Take the moved node prev and point it to its next
2. Take the moved node next and point it to its prev
3. Set the moved node next to undefined
4. Set the moved node prev to undefined
Now, with the moved node already at the head:
5. Set the moved node next to the head
6. Set the head prev to the moved node value
7. Finally, set the head as the moved node

```
