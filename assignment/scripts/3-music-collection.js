console.log('***** Music Collection *****')

let collection = [];

// Created function to add new album
function addToCollection( title, artist, yearPublished ) {
// Object created w/properties listed    
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
// Adds new object to array    
    collection.push(album);
    return album;
}

// Test, adding new albums to collection
console.log(addToCollection('Playing God', 'Polyphia', '2022'));
console.log(addToCollection('The Foundations of Decay', 'My Chemical Romance', '2022'));
console.log(addToCollection('Ultraviolence', 'Lana Del Ray', '2014'));
console.log(addToCollection('Night on Fire', 'VHS or Beta', '2004'));
console.log(addToCollection('Opaline', 'Dishwalla', '2002'));
console.log(addToCollection('Stacked Rubbish', 'The Gazette', '2007'));
console.log(collection);

// This function loops over the array
// and console.logs the info
function showCollection( array ) {
    // Logs "6" total albums 
    console.log(array.length);
    for (let album in array) {
        console.log(`${array[album].title} by ${array[album].artist}, published in ${array[album].yearPublished}.`);
    }
}

// Testing function
showCollection(collection);
/* 
Output:
Playing God by Polyphia, published in 2022.
The Foundations of Decay by My Chemical Romance, published in 2022.
etc..
*/

// function takes artist as parameter, loops
// & adds object, will return if match found.
function findByArtist( artist ) {
    let results = [];

    for(let album of collection) {
        if (artist === album.artist) {
            results.push(artist);
        }
    }
    return results;
}

// Testing findByArtist function
// Result = ['Polyphia']
console.log(findByArtist('Polyphia'));
// Result = ['VHS or Beta']
console.log(findByArtist('VHS or Beta'));
// Result = [], empty array since
// artist is not listed in collection
console.log(findByArtist('Architects'));