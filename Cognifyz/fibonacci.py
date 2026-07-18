def generate_fibonacci(n):
    a,b = 0 , 1
    count = 0

    if n <= 0:
        print("Please enter a Positive Number")
    elif n == 1:
        print(f"Fibonacci Sequence: {a}")
    else:
        print("Fibonacci Sequence: ")
        while count < n:
            print(a, end=" ")
            
            nth = a + b
            a = b
            b = nth
            count += 1

numbers = int(input("Enter the number of terms you would like to see: "))
generate_fibonacci(numbers)