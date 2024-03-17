function show_magicians(magicians: string[]): void {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

let magicians: string[] = [
  "Harry Houdini",
  "David Blaine",
  "Penn Jillette",
  "Teller",
];

show_magicians(magicians);
