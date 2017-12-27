Tranducing Data - Part 1
Recently came across Egghead.io’s course on building trasnducers. As a lover of Redux, I immediately gravitated towards the term “transducers” as they me of regular reducer functions that I everyday. In this article, we’re going to touch a lot of different bases!

It all started with `reduce`... the G.O.A.T.
The resurgence of Functional Programming has been quite tremendous.  
 `reduce` as well as its less-powerful siblings, `map` and `filter`, sit on the for for front of functional programming because they are pure by nature. 
This makes these functions crucial for anyone crafting the architecture of an application as it allows us to mitigate side-effects using pure functions.





### Redux
 Redux has been a revolutionary tool. In a short time, Dan Abromov, co-founder, has been adopted by massive applications…. 
Redux is shaped around functional programming. Action creators are pure functions. And the most notable aspect of redux is the `reducer` function, which (as it’s name suggests), is simply an argument being passed into a `.reduce(reducer)`.




```javascript
Examples of pure functions.
const doubleIt = num => num * 2;
Const doubleIt = x => x * 2;
const isEven = num => num % 2 === 0;
[1,2,3,4].map(doubleIt);
```

Reducers are argument passed to the `reduce` method. They take an accumulation and a value to be added to that accumulation. I briefly mentioned `map` & `filter` being reduce’s “less-powerful siblings”. To show that in practice, we’re going to look at reducer functions that implement map & filter functionality.

>  The map() method creates a new array with the results of calling a provided function on every element in the calling array.
[Mozilla Docs on Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

JavaScript’s `.map` method takes in an array, and then returns a new array resulting from the transformation function called on each element.
Whereas native `map` chains onto an array to transform its values ([1,2,3].map(doubleNum)), the `map` reducer takes in the array as an argument. 
To transform the array being passed in, we’ll see that `map` takes a second peramter, xf. This is just the transformer function which our reducer will apply to our array. 
Before our new array will be created, we use `array.reduce()` , kicking off this function so our values can be accumulated.
   
Our custom map function takes an arr

```javascript
// transformer fn (xf)
const double = x => x * 2;

// native map | Array of a million:181.944m
timeIt('native map function | Array of a million', () => {
  	arrOfMillion.map(double);  
})

// map reducer | Array of a million: 63.995ms
timeIt(' map reducer | Array of a million', () => {
    map(double, arrOfMillion); 
})

const map = (xf, array) => {
    return array.reduce((accumulation, value) => {
        accumulation.push(xf(value));
        return accumulation;
    }, []);
}
```

#### Filter Reducer
* 


```javascript
// predicate fn
const evenOnly = num => num % 2 === 0;
// custom filter with reduce
const filter = (predicate, array) => 
				array.reduce((accumulation, value) => {
        if (predicate(value)) accumulation.push(value);
        return accumulation;
}, []);

// native filter | Array of a million: 41.936ms
timeIt('native filter | Array of a million', () =>
    arrOfMillion.filter(evenOnly)
)

// filter reducer | Array of a million: 37.977ms
timeIt('filter reducer | Array of a million', () =>
    filter(evenOnly) (arrOfMillion)
)

```


### Creating transducers
Eliminate the dependence on the array so it’s purely a reducer


const map = (xf, array) => (accumulation, value) => {
       accumulation.push(xf(value));
       return accumulation;
   }, []);

