def check_password_strength(password):
    length_check = len(password) >= 8
    has_upper = any(char.isupper() for char in password)
    has_lower = any(char.islower() for char in password)
    has_digit = any(char.isdigit() for char in password)
    has_special = any(not char.isalnum() for char in password)

    score = sum([length_check, has_upper, has_lower, has_digit, has_special])

    if score == 5:
        return "Strong password!"
    elif score >=3:
        return "Moderate password!,try adding more characters"
    else:
        return "weak password!,Try Again"
    
user_password = input("Enter a password to check")
print(check_password_strength(user_password))