// Define a guest list
let guestList: string[] = [
  "Albert Einstein",
  "Ada Lovelace",
  "Leonardo da Vinci",
  "Abdul Fatah",
];

function sendInvitation(guest: string) {
  console.log(
    `Dear ${guest},\nYou are cordially invited to dinner at my place. Please join us for an evening of great food and stimulating conversation.\n\nBest regards,\n[Your Name]`
  );
}

console.log(`Number of people invited to dinner: ${guestList.length}`);

guestList.forEach((guest) => sendInvitation(guest));
