let guestList: string[] = [
  "Ada Lovelace",
  "Nelson Mandela",
  "Marie Curie",
  "Leonardo da Vinci",
];

for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored by your presence.`
  );
}

console.log(
  "Unfortunately, the dinner table won't arrive in time, and we can only invite two people."
);

while (guestList.length > 2) {
  let removedGuest = guestList.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you're still invited to dinner.`);
}

guestList = [];
console.log(
  "After removing the last two names, the guest list is now empty:",
  guestList
);
