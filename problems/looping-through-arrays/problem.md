For this challenge we will use a **for loop** to access and manipulate a list of values in an array.

Accessing array values can be done using an integer.

Each item in an array is identified by a number, starting at `0`.

So in this array `hi` is identified by the number `1`:

```py
greetings = ['hello', 'hi', 'good morning']
```

It can be accessed like this:

```py
greetings[1]
```

So inside a **for loop** we would use the `i` variable inside the square brackets instead of directly using an integer.

## The challenge:

Create a file named `looping-through-arrays.py`.

In that file, define a variable named `pets` that references this array:

```py
['cat', 'dog', 'rat']
```

Create a for loop that changes each string in the array so that they are plural.

You will use a statement like this inside the for loop:

```py
pets[i] = pets[i] + 's'
```

After the for loop, use `print()` to print the `pets` array to the terminal.

**Check to see if your program is correct by running this command:**

```bash
pythonscripting verify looping-through-arrays.py
```
