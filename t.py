num1 = int(input())
num2 = int(input())
f1 = []
f2 = []

for i in range(1,num1):
    if num1%i==0:
        f1.append(i)

for i in range(1,num1):
    if num2%i==0:
        f2.append(i)

hcf = 0

for i in f1:
    if i in f2:
        hcf = max(i,hcf)

print(hcf)