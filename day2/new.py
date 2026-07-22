#my practice 
print(2 + 2)
name = ("Almaz")
print(f"salam, {name}!")

student_name = "Almaz"
age = (24)
subject = "nursing"
is_enrolled = True
print(student_name)
print(age + 1)
print(subject)
print(is_enrolled)

price = 250 
total = price * 3 
tax_price = total * 1.15
print(tax_price)

print(len("hello"))
print("hello".upper())
print("a" in "banana")

age_text = "24"
age = int(age_text)
price = float("250")
lebel = str(750)
print(age + 2, price, lebel)
print(5 + 2, 2 * 3, 6 - 4, 5//2, 4 % 2,7/2, 3**2)

balance = 1500
is_member = True
print(balance > 100 and is_member)

balance = 1500
if balance >= 1000:
    print("premium customer")
elif balance >=500 :
    print("regular customer")
else: 
    print("basic customer")

count = 3
while count > 0:
    print(f"sending... {count}")
    count = count - 1 
print("sent via tele birr")

count = 6 
while count > 0:
    print(f"loading... {count}")
    count = count - 1
print("transaction complete")

for i in range(1,4):
    print(f"recept {i}")
for i in range(0,10,2):
    print(f"recept {i}")

names = ["almax", "betel", "addis"]
for name in names:
    print(f"salam, {name}")

for n in range(1,10):
    if n == 5:
        break
    print(n)

for n in range(1,8):
    if n == 4:
        continue
    print(n)

customer =[
    ("almaz", 1600),
    ("bekele", 1300),
    ("yared", 2000),
]
for name, balance in customer:
    if balance >=2000:
        tire = "premimum"
    elif balance >=1500:
        tire = "regular"
    else:
        tire = "basic"
    print(f"{name}: {tire}, ({balance} ETB)")