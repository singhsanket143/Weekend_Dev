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


### Problem 2:
If +0 and -0 and 0 when used with equality operators always give the ans as true,
how can you identify whether the sign of the 0 is + or - ? 
So write a function that can compare 0 and -0 and if user passes 0 and -0 then it returns false
And write function getSign() which takes a number and tells you whether it is pos or neg