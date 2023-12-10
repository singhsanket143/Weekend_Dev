### Problem 1:

If NaN is never equal to itself, let's say that we want to write a function that returns NaN for something,
but now how do we check if the function returned NaN ? 

```
function fun() {
    // does something

    return NaN;
}

const response = fun();

// How to check if the value in response variable is NaN
```