// Define a guest list
var guestList = [
    "Albert Einstein",
    "Ada Lovelace",
    "Leonardo da Vinci",
];
function sendInvitation(guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place. Please join us for an evening of great food and stimulating conversation.\n\nBest regards,\n[Your Name]"));
}
console.log("Number of people invited to dinner: ".concat(guestList.length));
guestList.forEach(function (guest) { return sendInvitation(guest); });
