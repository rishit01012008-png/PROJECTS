import random

secret_number = random.randint(1, 100)
guess = 0
print("I'm thinking of a number between 1 to 100")

while guess != secret_number:
    guess = int(input("Enter a Guess"))
    if guess < secret_number:
        print("Too low!,Try Again")
    elif guess > secret_number:
        print("Too high!,Try again")
else:
    60
    print("Congratulations!,You guessed it!!!")