console.log('***** Music Collection *****')

let collection = [];

// Created function to add new album
// to empty array.
function addToCollection( title, artist, yearPublished ) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}