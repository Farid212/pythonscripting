Conditional statements are used to alter the control flow of a program, based on a specified boolean condition.

A conditional statement looks like this:

```py
if n > 1:
  print('the variable n is greater than 1.')
else:
  print('the variable n is less than or equal to 1.')
```

Inside parentheses you must enter a logic statement, meaning that the result of the statement is either true or false.

The else block is optional and contains the code that will be executed if the statement is false.

## The challenge:

Create a file named `if-statement.py`.

In that file, declare a variable named `word`.

Make the `word` variable reference the string value **"python"**.

Then use `print()` to print "**The word has more than five characters."** if the length of the value of `word` is greater than five.
Otherwise, print "**The word has five characters or less.**"

**Check to see if your program is correct by running this command:**

```bash
javascripting verify if-statement.js
```
