#### [`.apply()` tricks](http://2ality.com/2012/07/apply-tricks.html)
* **all methods have an `apply` method**
* Signature of apply method: `func.apply(thisValue, [arg1, arg2, ...])`
  * Ignoring `thisValue` results in `func.apply(arg1, arg2)`
* Holes in arrays `[1,,2,3]`
  * Missing elements are given an `empty` value & take up an index spot.
  * ex. `arr[1]` will print `undefined`. `arr[3]` will print 3. 
* Flatten arrays with `[].concat(app)  

##### Array methods
* `.pop.`


#### Array.from
`Array.from (arrayLike [ , mapfn [ , thisArg ] ] );`
* Converts an array-like object to an array.
* "Arraylike"
  * Indexed elements and a `length` property.
  * Or an iterable object (`Set`);

```javascript
const setObj = new Set("a", "b", "c");  
const objArr = Array.from(setObj);  
// objArr[1] == "b";   
```
