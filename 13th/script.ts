let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Rome"];

console.log("Original Order:", placesToVisit);

let sortedArray = [...placesToVisit].sort();
console.log("Alphabetical Order:", sortedArray);

console.log("Original Order (unchanged):", placesToVisit);

let reverseSortedArray = [...placesToVisit].sort().reverse();
console.log("Reverse Alphabetical Order:", reverseSortedArray);

console.log("Original Order (unchanged):", placesToVisit);

placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

placesToVisit.reverse();
console.log("Original Order (after reversing again):", placesToVisit);

placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
