var guestList = [
    "Ada Lovelace",
    "Nelson Mandela",
    "Marie Curie",
    "Leonardo da Vinci",
];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. We would be honored by your presence."));
}
console.log("Unfortunately, the dinner table won't arrive in time, and we can only invite two people.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you're still invited to dinner."));
}
guestList = [];
console.log("After removing the last two names, the guest list is now empty:", guestList);
