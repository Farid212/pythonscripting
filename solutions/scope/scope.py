def f1():
    x = 42
    def f2():
        x = 0
    f2()
    print(x)        
f1()
