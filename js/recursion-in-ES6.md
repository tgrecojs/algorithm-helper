#### Destructuring

```javascript
const wrap = (string) => {
  let wrapped = [string];
  return wrapped;
}
wrap('tom') // ['tom']
const unwrap = (array) => {
  let [unwrapped] = array;
  return unwrapped;
}
wrap('tom') // ['tom']

const lastName = (fullName) => {
  const [first, last] = fullName;
  return last;
}
lastName('Tom','Greco') 
// 'Greco'
```

##### We can use nesting with destructuring
```javascript
const describePerson = description => {
const [ [first, last], occupation ] = description;
  return `${first} ${last} is very good at ${occupation`
}

describePerson('Tom','Greco,'Programming');
```

### `...rest`& `...spread`
* Putting an array together with a literal array expression is the inverse of taking it apart with destructuring.
* Lists can contain many (or 0) items
* **rule for building lists**
  * A list (is either):
    * A. empty
    * B. consists of an element concatenedated with a list.

```javascript
// CREATING A LIST WITH ARRAY LITERAL + SPREADS
[]
//=> []

["baz", ...[]]
//=> ["baz"]

["bar", ...["baz"]]
//=> ["bar","baz"]

["foo", ...["bar", "baz"]]
//=> ["foo","bar","baz"]

// VS.

// DECOMPOSE A LIST WITH DESTRUCTURING + SPREADS
const [first, ...rest] = [];
first
  //=> undefined
rest
  //=> []:

const [first, ...rest] = ["foo"];
first
  //=> "foo"
rest
  //=> []

const [first, ...rest] = ["foo", "bar"];
first
  //=> "foo"
rest
  //=> ["bar"]

const [first, ...rest] = ["foo", "bar", "baz"];
first
  //=> "foo"
rest
  //=> ["bar","baz"]
```


#### gathering (`...rest`)
* `...` to insert elements is **spreading**
* ``...` to extract element is **gathering**

```javascript
const data = [1, 2, 3, 4];
console.log(data) // [1,2,3,4]
console.log(...data) // 1,2,3,4
const date = new Date(...[2015, 1, 1]);
```
#### Self Similiary


```javascript
const isEmpty = ([first, ...rest]) => first === undefined;

const length = ([first, ...rest]) =>
  first === undefined
    ? 0
    : 1 + length(rest);
length([])
//=> 0
  
length(["foo"])
//=> 1
  
length(["foo", "bar", "baz"])
//=> 3
```

