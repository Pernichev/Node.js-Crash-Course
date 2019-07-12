const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created');
// });

// Create and write to a file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
    if(err) throw err;
    console.log('File created and written');

    // Append to file after creating
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' Text appended', err => {
        if(err) throw err;
        console.log('File created and written');
    });
});

//