var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Tokyo", "Paris", "New York", "Sydney", "Rome"];
console.log("Original Order:", placesToVisit);
var sortedArray = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical Order:", sortedArray);
console.log("Original Order (unchanged):", placesToVisit);
var reverseSortedArray = __spreadArray([], placesToVisit, true).sort().reverse();
console.log("Reverse Alphabetical Order:", reverseSortedArray);
console.log("Original Order (unchanged):", placesToVisit);
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
placesToVisit.reverse();
console.log("Original Order (after reversing again):", placesToVisit);
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
