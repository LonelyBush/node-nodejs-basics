import {readdir } from "fs";

const list = async () => {
readdir('src/fs/files', (err, files) => {
    if(err){
        throw new Error('FS operation failed')
    }else {
       console.log(files)
    }

})
};

await list();