console.log('***** Music Collection *****')

let collection =[]
let food =['potato']

function addToCollection(title, artist, yearPublished) {
    const album = new Object ();
    album.title = title
    album.artist = artist
    album.yearPublished = yearPublished
    collection.push(album)
    console.log(album);
    return album
};

addToCollection('Bylaw','Martin Garrix', '2018')
addToCollection('The Human Condition', 'Jon Bellion', '2016')
addToCollection('Cypress Grove', 'Glaive', '2020')
addToCollection('Glory Sound Prep ', 'Jon Bellion', '2018')
addToCollection('DAMN.', 'Kendrick Lamar', '2017')
addToCollection('bb u ok?', 'San Holo', '2021')

console.log(collection);

function showCollection(array) {

    console.log(array.length);

    for (let i = 0; i < array.length; i++){

        console.log(`${title} By: ${artist} Published in: ${yearPublished}`);  

    }
    
}
showCollection(collection)

function findByArtist(artist){
    let sameArtist = []
    for (let i = 0; i < collection.length; i++) {
        if (condition) {
            
        }
        
    }
}
