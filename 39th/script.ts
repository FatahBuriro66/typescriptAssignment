function show_magicians(magicians: string[]): void {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];

  for (let i = 0; i < magicians.length; i++) {
    great_magicians.push(`the Great ${magicians[i]}`);
  }

  return great_magicians;
}

let magicians: string[] = [
  "Harry Houdini",
  "David Blaine",
  "Penn Jillette",
  "Teller",
];

let great_magicians = make_great([...magicians]);

console.log("Original Magicians:", magicians);

console.log("\nGreat Magicians:", great_magicians);
