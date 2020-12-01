You can access and manipulate object properties –– the keys and values that an object contains –– using a method very similar to arrays.

Here's an example using **dot notation**:

```py
class example():
  pizza = 'yummy'

print(example.pizza)
```

The above code will print the string `'yummy'` to the terminal.

## The challenge:

Create a file named `object-properties.py`.

In that file, define a variable named `food` like this:

```py
class food():
  types = 'only pizza'
```

Use `print()` to print the `types` property of the `food` object to the terminal.

Check to see if your program is correct by running this command:

```bash
pythonscripting verify object-properties.py
```
