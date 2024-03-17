function make_sandwich(items: string[]): void {
  console.log("Sandwich Summary:");
  console.log("Bread");
  items.forEach((item) => {
    console.log(item);
  });
  console.log("Bread");
  console.log("Sandwich complete!");
  console.log("----------------------------------");
}

make_sandwich(["Ham", "Cheese", "Lettuce"]);
make_sandwich(["Turkey", "Tomato"]);
make_sandwich(["Peanut Butter", "Jelly", "Banana", "Honey"]);
