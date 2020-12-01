To keep things organized, let's create a folder for this workshop. 

Run this command to make a directory called `pythonscripting` (or something else if you like):

```bash
mkdir pythonscripting
```

Change directory into the `pythonscripting` folder:

```bash
cd pythonscripting
```

Create a file named `introduction.py`:

```bash
touch introduction.py
```

Or if you're on Windows: 
```bash
type NUL > introduction.py
```
(`type` is part of the command!)

Open the file in your favorite editor, and add this text:

```py
print('hello')
```

Save the file, then check to see if your program is correct by running this command:

```bash
pythonscripting verify introduction.py
```

By the way, throughout this tutorial, you can give the file you work with any name you like, so if you want to use something like `dogsAreFriendly.py` file for every exercise, you can do that. Just make sure to run:

```bash
pythonscripting verify dogsAreFriendly.py
```

