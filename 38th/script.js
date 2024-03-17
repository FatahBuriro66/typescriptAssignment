function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
var magicians = [
    "Harry Houdini",
    "David Blaine",
    "Penn Jillette",
    "Teller",
];
make_great(magicians);
show_magicians(magicians);
