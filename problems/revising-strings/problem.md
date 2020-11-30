You will often need to change the contents of a string.

Strings have built-in functionality that allow you to inspect and manipulate their contents.

Here is an example using the `.replace()` method:

```py
example = 'I like bananas'
exampleChanged = example.replace('bananas', 'chocolate')
print(example)
```

Note that to change the value that the `example` variable references, we need  
to use the equals sign again, this time with the `example.replace()` method to  
the right of the equals sign.

## The challenge:

Create a file named `revising-strings.py`.

Define a variable named `pizza` that references this string: `'pizza is alright'`

Use the `.replace()` method to change `alright` to `wonderful`.

Use `print()` to print the results of the `.replace()` method to the terminal.

Check to see if your program is correct by running this command:

`pythonscripting verify revising-strings.py`
