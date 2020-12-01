There are many ways to manipulate arrays.

One common task is filtering arrays to only contain certain values.

For this we can use the `filter()` method.

Here is an example:

```py
pets = ['cat', 'dog', 'elephant']

def petFilter(pet):
  return (pet != 'elephant')

filtered = filter(petFilter, pets)
```

The `filtered` variable will now only contain `cat` and `dog`.

## The challenge:

Create a file named `array-filtering.py`.

In that file, define a variable named `numbers` that references this array:

```py
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Like above, define a variable named `filtered` that references the result of `filter()`.

The function that you pass to the `.filter()` method will look something like this:

```py
def evenNumbers (number):
  return number % 2 == 0
```

Pay close attention to the syntax used throughout your solution. Use `print()` to print the `filtered` array to the terminal.

**Check to see if your program is correct by running this command:**

```bash
pythonscripting verify array-filtering.py
```
