Python is an object oriented programming language.

Almost everything in Python is an object, with its properties and methods.

A Class is like an object constructor, or a "blueprint" for creating objects.

Here is an example:

```py
class FoodPreferences():
    pizza = 'yum'
    salad = 'gross'
```

## Create an Object

Now we can use the class named `FoodPreferences` to create objects:

```py
fp = FoodPreferences()
print(fp.pizza)
```

## The challenge:

Create a file named `objects.py`.

In that file, define a class named `Pizza` like this:

```py
class Pizza():
    def __init__(self, toppings, crust, serves):
       self.toppings = toppings
       self.crust = crust
       self.serves = serves
```

Declare a `pizza` that will receive 3 parameters `toppings, crust, and serves`, the `toppings` should be an **array** with `cheese, sauce, and pepperoni`, the `crust` is a **string** `deep dish` and serves is an **integer** of `2`

Use `print()` to print the `pizza` object to the terminal.

Check to see if your program is correct by running this command:

```bash
pythonscripting verify objects.py
```
