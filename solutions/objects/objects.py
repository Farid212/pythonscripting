class Pizza():
    def __init__(self, toppings, crust, serves):
       self.toppings = toppings
       self.crust = crust
       self.serves = serves

pizza =  Pizza(['cheese', 'sauce', 'pepperoni'], 'deep dish', 2)

print(pizza.__dict__)
