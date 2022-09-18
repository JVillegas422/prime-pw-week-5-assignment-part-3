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
console.log(addToCollection('Playing God', 'Polyphia, 2022'));
console.log(addToCollection('The Foundations of Decay', 'My Chemical Romance', '2022'));
console.log(addToCollection('Ultraviolence', 'Lana Del Ray', '2014'));
console.log(addToCollection('Night on Fire', 'VHS or Beta', '2004'));
console.log(addToCollection('Opaline', 'Dishwalla', '2002'));
console.log(addToCollection('Stacked Rubbish', 'The Gazette', '2007'));
console.log(collection);