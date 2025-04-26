import {createGzip} from 'zlib'
import { createReadStream, createWriteStream, unlink } from 'fs';
import { pipeline } from 'stream';

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream('src/zip/files/fileToCompress.txt')
    const dist = createWriteStream('src/zip/files/archive.gz');
    pipeline(source, gzip, dist, (err) => {
        if(err){
            console.error(err);
            process.exitCode = 1
        }
        unlink('src/zip/files/fileToCompress.txt', (err) => {
            if(err){
                throw new Error('FS operation failed')
            }
        })
    })
};

await compress();