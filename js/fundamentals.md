<!-- markdownlint-disable MD032  MD004-->

# JavaScript Fundamentals

## To do

- [] types of loops & usecase
- [] equality operators
- []

#### Loops!
* `for`
    * 4 Parts : (initializer, pre-test condition, post-execute) & fn body
    * Flow : 
        * 1. initializer is executed
        * 2. pretest condition is executed. If true, the body is executed.
        * 3. After body executes, post-execture code is run.
* `while`
    * 2 Parts: pretest conidtion & loop body
    * Before the loop body is executed, the pretest condition is evaluated. If the condition evaluates to true, then the loop body is executed; otherwise, the loop body is skipped. 
* **Any for loop can also be written as a while loop and vice versa**
* `do... while`
    * **ALWAYS executes at least once** & the `post-test condition` determines whether it should run again.
    * only `post-test` loop in JS.
    * 2 Parts: Loop body & post-test condition.
    ```javascript
    var i = 0;
    do {
        // loop body
    } while (i++ < body)
    ```
* `for.. in`
    * `for in` is SLOW
    * It enumerates the named properties of any object -> this can include inherited stuff so you should never use for-in to iterate over members of an array.
    * Avoid issue about using Object.create() 
* `for ... of`


### JS Math Assignments (x+=y)

| equation | actual |
|---|---|
|x-=y| x = x - y
|x+=y|x = x + y |


function compareNumbers(a, b) {
  return a - b;
}

```javascript
let data = ['tom','john','tbone','josh']
let hash = {};
let i = 0;
for(num in nums) {
  hash[num] = i;
  i++
}

```




#### `array` Access (How to....)


* Get next item in array
  * `array[i + 1]`
* Get last item in array.
  * `array[array.length - 1]`
* Find middle of array
  * `Math.Floor(array.length  / 2)`
* `array.length - 1`
  * Index of last item in an array
*


#### Space Complexity | Memory Usage

* **In place Algorithms:**
  * Operate directly on inputted data, which means that we’re effectively destroying the original data set.
  * More space-effecienct because the algorithm only needs a little extra space in memory, O(1)
* **Out of place**
  * Don’t operate directly on dataset -> makes a copy and performs sorting to copy.
  * Safer, but the memory usage of this algorithm grows with input size.

#### Stability - (dealing with same key)

* **unstable algorithm**
  * is one where there is no guarantee that, if two items are found to have the same sort key, that their relative order will be             preserved.
* **stable algorithm** 
  * one that preserves the relative order of the elements**; if the keys are the same, we can guarantee that the elements will be ordered in the same way in the list as they appeared before they were sorted
#### Internal vs. External
* **Internal**
  * All calculations can be done with main, internal memort
* **External**
  * Records stored externally in memory.
  * Ex. `mergeSort` merge fm. -> sorts data in outside fn.
#### Comparison 
* Is the algorithm using any comparison operators (`<=>`)?
* If yes, it's a comparison sort algorithm
* Ex. Bubble, Insertion, Selection

#### Time Complexity Table

| Input | Common Examples |
|---|---|
|Constant: O(1)| Array access, arithmetic operators|
|Logarithmic: O(log(N))| Binary search, binary search tree retrieval/insertion (balanced)|
|Linear: O(N)| Looping through an array or hashtable| 
|Quasilinear: O(Nlog(N))| Quicksort, mergesort, heapsort| 
|Quadratic: O(N^2)| Nested loops | 
|Polynomial: O(N^C)| Deeply nested loops|
|Exponential: O(C^N)| Multiple-recursion | 
|Factorial: O(!N)| Permutations |

## (Some) Soritng Algorithm tables
Algorithm Name| Time complexity  |  Space Complexity | Interal/External | Recursive | Comparison Sort ? |
--------------| -----------------|------------------ |------------------|-----------|-------------------| 
Bubble  Sort |     quadratic|   in-place| internal | No | 
Selection Sort | quadratic 

## Native JS Methods

Method| Time complexity  | Space Complexity | Interal/External | Recursive | Comparison Sort ? |
--------------| -----------------|------------------ |------------------|-----------|-------------------| 
`.sort` | varies |   in-place| internal | Internal | depends | depends | 
`.map` | o(n)


#### [Selection Sort](#selection-sort)
A selection sort algorithm sorts through a list of items by iterating through a list of elements, finding the smallest one, and putting it aside into a sorted list. It continues to sort by finding the smallest unsorted element, and adding it to the sorted list.
