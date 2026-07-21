import random

start = int(input("Enter the Starting number: "))
end = int(input("Enter the Ending number: "))

secret_number = random.randint(start, end)
guess = 0
print("I am thinking of a random number")

while guess != secret_number:
    guess = int(input("Enter your Guess"))
    if guess < secret_number:
        print("Too low!,Try again")
    elif guess > secret_number:
        print("Too High,Try again")
else:
    print("Congratulations!,You Guessed it!!!")