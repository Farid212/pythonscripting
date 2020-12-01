JavaScript provides a native way of listing all the available keys of an object. This can be helpful for looping through all the properties of an object and manipulating their values accordingly.

Here's an example of listing all object keys using the **Object.keys()**
prototype method.

```py
car = {
    'make': 'Toyota',
    'model': 'Camry',
    'year': 2020
}

keys = car.keys()

print(keys)
```

The above code will print an array of strings, where each string is a key in the car object. `['make', 'model', 'year']`

## The challenge:

Create a file named `object-keys.py`.

In that file, define a variable named `car` like this:

```py
bike = {
  'Suzuki': 'make',
  'Bandit': 'model',
  '1999': 'year'
}
```

Then define another variable named `keys` that will be containt all `bike`'s `key`

Use `print()` to print the `keys` variable to the terminal.

**Check to see if your program is correct by running this command:**

```bash
pythonscripting verify object-keys.py
```
