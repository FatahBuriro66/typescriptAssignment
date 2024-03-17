var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    var great_magicians = [];
    for (var i = 0; i < magicians.length; i++) {
        great_magicians.push("the Great ".concat(magicians[i]));
    }
    return great_magicians;
}
var magicians = [
    "Harry Houdini",
    "David Blaine",
    "Penn Jillette",
    "Teller",
];
var great_magicians = make_great(__spreadArray([], magicians, true));
console.log("Original Magicians:", magicians);
console.log("\nGreat Magicians:", great_magicians);
