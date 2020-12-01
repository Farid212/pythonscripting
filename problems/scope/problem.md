`Scope` is the set of variables, objects, and functions you have access to.

JavaScript has two scopes: `global` and `local`. A variable that is declared outside a function definition is a `global` variable, and its value is accessible and modifiable throughout your program. A variable that is declared inside a function definition is `local`. It is created and destroyed every time the function is executed, and it cannot be accessed by any code outside the function.

Functions defined inside other functions, known as nested functions, have access to their parent function's scope.

Pay attention to the comments in the code below:

```py
a = 4 # a is a global variable, it can be accessed by the functions below

def foo () :
  b = a * 3 # b cannot be accessed outside foo function, but can be accessed by functions
  # defined inside foo
  def bar (c) :
    b = 2 # another `b` variable is created inside bar function scope
    # the changes to this new `b` variable don't affect the old `b` variable
    print(a, b, c)

  bar(b * 4)

foo() # 4, 2, 48
```

Here’s the basic function:

```py
def doubler(x):
  return x*2

print(doubler(2))
# Prints 4
```

Here's the lambda function:

variable = lambda `parameters`: `expression`

```py
doubler = lembda x: x*2

print(doubler(5))
# Prints 10
```

A lambda function can be immediately invoked. For this reason it is often referred to as an Immediately Invoked Function Expression (IIFE).

Here’s the same previously seen `doubler` lambda function that is defined and then called immediately with 3 as an argument.

```py
print((lambda x: x*2)(3))
#Prints 6
```

## The challenge:

Create a file named `scope.py`.

In that file, copy the following code:
```py
def f1():
    x = 42
    def f2():
        x = 0
    f2()

f1()
```

Use your knowledge of the variables' `scope` and place the following code inside one of the functions in `scope.py`
so the output is `42`
```py
print(x)
```

**Check to see if your program is correct by running this command:**

```bash
pythonscripting verify scope.py
```
