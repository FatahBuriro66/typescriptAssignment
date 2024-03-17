function show_magicians(magicians: string[]): void {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `the Great ${magicians[i]}`;
  }
}

let magicians: string[] = [
  "Harry Houdini",
  "David Blaine",
  "Penn Jillette",
  "Teller",
];

make_great(magicians);

show_magicians(magicians);
