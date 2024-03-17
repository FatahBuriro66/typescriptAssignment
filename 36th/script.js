function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Taylor Swift', 'Fearless');
var album2 = make_album('Ed Sheeran', '÷', 16);
var album3 = make_album('Adele', '21');
console.log(album1);
console.log(album2);
console.log(album3);
