function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album = {
      artist: artist,
      title: title
    };
    
    if (tracks) {
      album.tracks:= tracks;
    }
  
    return album;
  }
  
  let album1 = make_album('Taylor Swift', 'Fearless');
  let album2 = make_album('Ed Sheeran', '÷', 16);
  let album3 = make_album('Adele', '21');
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
  