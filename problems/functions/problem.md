A function is a block of code that takes input, processes that input, and then produces an output.

Here is an example:

```py
def example (x):
  return x * 2
```

We can **call** that function like this to get the number 10:

```py
example(5)
```

The above example assumes that the `example` function will take a number as an argument –– as input –– and will return that number multiplied by 2.

## The challenge:

Create a file named `functions.py`.

In that file, define a function named `eat` that takes an argument named `food`
that is expected to be a string.

Inside the function return the `food` argument like this:

```py
return food + ' tasted really good.'
```

Inside of the parentheses of `print()`, call the `eat()` function with the string `bananas` as the argument.

**Check to see if your program is correct by running this command:**

```bash
pythonscripting verify functions.js
```
