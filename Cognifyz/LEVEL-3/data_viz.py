import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset('tips')

print("Here is a sneek peek at the Dataset: ")
print(df.head(),"\n")

sns.scatterplot(data=df, x="total_bill", y="tip", hue= "time", palette= "viridis")

plt.title("Total Bill vs Tip")
plt.xlabel("Total Bill($)")
plt.ylabel("Tips($)")

print("Generate Visualising window...")
plt.show()