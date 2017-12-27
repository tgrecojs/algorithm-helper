
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
