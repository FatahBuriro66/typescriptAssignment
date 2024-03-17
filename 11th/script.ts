let guestList: string[] = ["Ada Lovelace", "Nelson Mandela", "Marie Curie"];

for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored by your presence.`
  );
}

let guestCantMakeIt: string = guestList[1];
let newGuest: string = "Leonardo da Vinci";

console.log(`Unfortunately, ${guestCantMakeIt} can't make it to the dinner.`);

guestList[1] = newGuest;

for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored by your presence.`
  );
}
