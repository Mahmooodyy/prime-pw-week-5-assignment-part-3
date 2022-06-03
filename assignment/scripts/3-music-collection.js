console.log('***** Music Collection *****')

let myCollection =[]

function addToCollection(title, artist, yearPublished) {
    const album = {
        title,
        artist,
        yearPublished
        }``
    myCollection.push(album)
    console.log(album);
    return album
};

addToCollection('Bylaw','Martin Garrix', '2018')
addToCollection('The Human Condition', 'Jon Bellion', '2016')
addToCollection('Cypress Grove', 'Glaive', '2020')
addToCollection('Glory Sound Prep ', 'Jon Bellion', '2018')
addToCollection('DAMN.', 'Kendrick Lamar', '2017')
addToCollection('bb u ok?', 'San Holo', '2021')

console.log(myCollection);


function showCollection(array) {
    
    console.log(array.length);

    for (let i = 0; i < array.length; i++){

         console.log(`${addToCollection.title} By: ${addToCollection[1]} Published in: ${addToCollection[2]}`);

    }    
}showCollection(myCollection)