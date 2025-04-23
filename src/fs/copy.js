import { copyFile, mkdir, readdir, } from "fs";

const copy = async () => {
readdir('src/fs/files', (err, files) => {
    if(err){
        return console.error(err)
    }

   mkdir('src/fs/files_copy', (err) => {
    if(err) {
        throw new Error('FS operation failed')
    } else {
     files.forEach((file) => {
        copyFile(`src/fs/files/${file}`, `src/fs/files_copy/${file}`, (err) => {
            if(err) return console.error(err)
        })
        })
    }
   });
})
};

await copy();
