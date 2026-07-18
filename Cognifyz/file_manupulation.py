def count_words_in_file(filename):
    try:
        with open(filename , 'r') as file:
            text = file.read().lower()
            words = text.split()

            counts = {}
            for word in words:
                word = word.strip('.,!?()[]"')
                if word:
                    counts[word] = counts.get(word , 0) + 1

            for word in sorted(counts.keys()):
                print(f"{word}: {counts[word]}")

    except FileNotFoundError:
        print("The File does not exists!!!")
count_words_in_file('sample.txt')