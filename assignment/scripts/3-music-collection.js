console.log('***** Music Collection *****')

let collection =[]

function addToCollection(title, artist, yearPublished) {
const album = new Object ();
album.title = title
album.artist = artist
album.yearPublished = yearPublished
collection.push(album)
return true
};

placeholder