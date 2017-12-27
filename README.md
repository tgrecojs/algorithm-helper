# algorithm-helper
* Todo -> **Organize && Create Table of contents**

### Intervew Cake
* in-place
    * An in-place algorithm operates directly on its input and changes it, instead of creating and returning a new object
    * Sometimes called destructive because original input is destroyed.



Notes on code &amp; the different factors that effect code performance

#### Checklist

[] Flow control
[ ] * sorting algorithms
[ ] decrease & conquer
[ ] divide & conquer
[ ] psuedo code

- [x] Flow control
- [ ] this is an incomplete item
- [ ] 
- [x] @mentions, #refs, [links](),
**formatting**, and <del>tags</del>
supported
- [x] list syntax required (any

### Classifying Sorting Algorithms
#### Space Complexity | Memory Usage
   * **In place Algorithms:**
     * Operate directly on inputted data, which means that we’re effectively destroying the original data set.
     * More space-effecienct because the algorithm only needs a little extra space in memory, O(1)
   * **Out of place**
     * Don’t operate directly on dataset -> makes a copy and performs sorting to copy.
     * Safer, but the memory usage of this algorithm grows with input size.
    
#### Stability
   * **unstable** algorithm is one where there is no guarantee that, if two items are found to have the same sort key, that their relative order will be preserved.
   * **stable algorithm is one that preserves the relative order of the elements**; if the keys are the same, we can guarantee that the elements will be ordered in the same way in the list as they appeared before they were sorted
#### Internal vs. External
   * **Internal**
     * All calculations can be done with main, internal memort
   * **External**
      * Records stored externally in memory.
      * Ex. `mergeSort` merge fm. -> sorts data in outside fn. 

   

Quadratic     | Linear           | 
--------------| -----------------|
  O(n^2)      |  O(n)            |





Algorithm Name| Time complexity  |  Space Complexity | Interal/External | Recursive | Comparison Sort ? |
--------------| -----------------|------------------ |------------------|-----------|-------------------| 
Bubble  Sort |     quadratic     |  
Content column 1 | Content column 2




#### [Selection Sort](#selection-sort)
A selection sort algorithm sorts through a list of items by iterating through a list of elements, finding the smallest one, and putting it aside into a sorted list. It continues to sort by finding the smallest unsorted element, and adding it to the sorted list.



### Flow Control
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


### Refactoring Loops for Performance  
* Taking a look at the codeblock below, what can be done to speed this up?

```javascript
    //original loops
    for (var i=0; i < items.length; i++){
    process(items[i]);
    }
     var j=0;
    while (j < items.length){
        process(items[j++]]); 
    }
    var k=0;
    do { 
        process(items[k++]);
    } 
    while (k < items.length);

```
In each of these loops, there are several operations happening each time the loop body is executed:
1. One property lookup (items.length) in the control condition
2. One comparison (i < items.length) in the control condition
3. One comparison to see whether the control condition evaluates to true (i < items.length == true)
4. One increment operation (i++)
5. One array lookup (items[i])
6. One function call (process(items[i]))

#### Optimizing the work in a loop
* The first step in optimizing the amount of work in a loop is to minimize the number of object member and array item lookups
* You can improve the loop per- formance easily by doing the property lookup once, storing the value in a local variable, and then using that variable in the control condition:
* Looking up `items.length` is WASTEFUL & It forces us to calculate the length of an array every time.
    * Soo -> Store the length value (number) inside of a variable that can incremented & decremented without accessing array

```javascript
//minimizing property lookups by storing

for (var i=0, len=items.length; i < len; i++) {
    process(items[i]); 
}
var j=0,
count = items.length;
    while (j < count){
     process(items[j++]]); 
     }
    var k=0,
    num = items.length;
    do { 
        process(items[k++]);
    } 
    while (k < num);
```


### Hash
##### Avoiding Problems with Object Literals
* The problem resides in the prototype chain of object literals as the properties and methods inherited from the `Object` prototype can clash with the mechanisms used to assert the existence of a key.  

```javascript
ex1. `in` looks up objects prototype chain for inherited props
let map = {};
'toString' in map; // true
let map = {};
map.hasOwnProperty('toString'); // true --> working!
// .hasOwnPropert() works... until we encounter specific key names
let map = {}
map.hasOwnProperty = 'foo'; // works!
map.hasOwnProperty('hasOwnProperty'); // TypeError!
```

* Hacky fix for these nameclashes

```javascript
let map = {};
map.hasOwnProperty = 'foo';
{}.hasOwnProperty.call(map, 'hasOwnProperty'); // true
```

* This works without any issues, but nevertheless, the object still imposes restrictions on how it can be utilized. For instance, every time you wanted to enumerate the properties of the object within a for ... in loop, you would need to filter out the properties of the prototype chain: 

```javascript
var map = {};
var has = {}.hasOwnProperty;

for (var key in map) {
    if (has.call(map, key)) {
        // do something
    }
}
```

### Solution! -> `object.create(null)`
* We can use Object.create() to create objects free from the prototype chain.
* These bare (aka dictionary) objects are ideal for hash maps because the absence of a [[Prototype]] removes the risk of name conflicts. Since the object is completely void of any methods or properties, it will resist any type of coercion, attempting to do so would result in an error:

```javascript
var obj = {};
// is equivalent to:
var obj = Object.create(Object.prototype);


var map = Object.create(null);

map instanceof Object; // false
Object.prototype.isPrototypeOf(map); // false
Object.getPrototypeOf(map); // null

```



