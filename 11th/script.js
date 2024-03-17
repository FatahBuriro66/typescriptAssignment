var guestList = ["Ada Lovelace", "Nelson Mandela", "Marie Curie"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. We would be honored by your presence."));
}
var guestCantMakeIt = guestList[1];
var newGuest = "Leonardo da Vinci";
console.log("Unfortunately, ".concat(guestCantMakeIt, " can't make it to the dinner."));
guestList[1] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. We would be honored by your presence."));
}
