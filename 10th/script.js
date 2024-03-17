var guestList = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. We would be honored by your presence."));
}
var newGuest = "Leonardo da Vinci";
guestList.push(newGuest);
console.log("Dear ".concat(newGuest, ", you are cordially invited to dinner. We would be honored by your presence."));
