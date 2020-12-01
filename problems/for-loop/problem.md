For loops allow you to repeatedly run a block of code a certain number of times. This for loop logs to the console ten times:

```py
for  x in range(10):
  # log the numbers 0 through 9
  print(i)

```

A `for` loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).

This is less like the `for` keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.

With the `for` loop we can execute a set of statements, once for each item in a list, tuple, set etc.

Unlike JavaScript, in python, the `for` loop does not require an indexing variable to set beforehand.

JavaScript:
```js
for(let i = 0; i<10; i++){
  // log the numbers 0 through 9
  console.log(i)
}
```

## The challenge:

Create a file named `for-loop.py`.

In that file define a variable named `total` and make it equal the number `0`.

Define a second variable named `limit` and make it equal the number `10`.

Create a for loop with a variable `i` starting at 0 and increasing by 1 each time through the loop. The loop should run as long as `i` is less than `limit`.

On each iteration of the loop, add the number `i` to the `total` variable. To do this, you can use this statement:

```py
total += i
```

When this statement is used in a for loop, it can also be known as _an accumulator_.  Think of it like a cash register's running total while each item is scanned and added up.  For this challenge, you have 10 items and they just happen to be increasing in price by 1 each item (with the first item free!).

After the for loop, use `print()` to print the `total` variable to the terminal.

Check to see if your program is correct by running this command:

```bash
pytonscripting verify for-loop.py
```
