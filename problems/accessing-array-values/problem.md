Array elements can be accessed through index number.

Index number starts from zero to array's property length minus one.

Here is an example:


```py
pets = ['cat', 'dog', 'bird']

print(pets[0])
```

The above code will print the first element of `pets` array - string `cat`.

Array elements must be accessed through only using bracket notation.

Dot notation is invalid.

Valid notation:

```py
print(pets[0])
```

Invalid notation:
```
print(pets.1);
```

## The challenge:

Create a file named `accessing-array-values.py`.

In that file, define array `foods` :
```py
foods = ['apple', 'pizza', 'pear']
```


Use `print()` to print the `second` value of array to the terminal.

Check to see if your program is correct by running this command:

```bash
pythonscripting verify accessing-array-values.py
```
