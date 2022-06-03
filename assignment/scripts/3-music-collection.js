console.log('***** Music Collection *****')

let collection =[]
let food =['potato']

function addToCollection0(title, artist, yearPublished) {
const album = new Object ();
album.title = title
album.artist = artist
album.yearPublished = yearPublished
collection.push(album)
console.log(album);
return album
};

addToCollection0('Bylaw','Martin Garrix', '2018')
addToCollection0('The Human Condition', 'Jon Bellion', '2016')
addToCollection0('Cypress Grove', 'Glaive', '2020')
addToCollection0('Glory Sound Prep ', 'Jon Bellion', '2018')
addToCollection0('DAMN.', 'Kendrick Lamar', '2017')
addToCollection0('bb u ok?', 'San Holo', '2021')


// I noticed that there are two ways to do this is one way more used or more correct than the other?


function addToCollection1(title, artist, yearPublished) {
this.title = title
this.artist = artist
this.yearPublished = yearPublished
collection.push(this)
console.log(this);
return this
};

new addToCollection1('Bylaw','Martin Garrix', '2018')
new addToCollection1('The Human Condition', 'Jon Bellion', '2016')
new addToCollection1('Cypress Grove', 'Glaive', '2020')
new addToCollection1('Glory Sound Prep ', 'Jon Bellion', '2018')
new addToCollection1('DAMN.', 'Kendrick Lamar', '2017')
new addToCollection1('bb u ok?', 'San Holo', '2021')


function showCollection(array) {
    array
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
        console.log(addToCollection.title, 'By:', addToCollection.artist, 'Published in:', addToCollection.yearPublished);
        
    }
}
