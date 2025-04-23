import { readFile } from 'fs';

const read = async () => {
    readFile('src/fs/files/fileToRead.txt', (err, data) => {
        if(err){
             throw new Error('FS operation failed')
        } else {
            console.log(data.toString());
        }
    })
};

await read();