let guestList: string[] = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];

for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored by your presence.`
  );
}

let newGuest: string = "Leonardo da Vinci";
guestList.push(newGuest);

console.log(
  `Dear ${newGuest}, you are cordially invited to dinner. We would be honored by your presence.`
);
