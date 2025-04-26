import { createReadStream, createWriteStream, open, unlink } from 'fs';
import {unzip} from 'zlib'

const decompress = async () => {
    const read = createReadStream('src/zip/files/archive.gz');

        read.on('error', (err) => {
            if(err){
                console.log('Please compress fileToCompress.txt first');
            }
        })
        read.on('data', (data) => {
            unzip(data, (err, buffer) => {
                if(err){
                    console.log('Please compress fileToCompress.txt before')
                    process.exitCode = 1;
                }
                open('src/zip/files/fileToCompress.txt', (err) => {
                    if(err){
                        const write = createWriteStream('src/zip/files/fileToCompress.txt');
                        write.write(buffer.toString())
                        unlink('src/zip/files/archive.gz', (err) => {
                                    if(err){
                                        throw new Error('FS operation failed')
                                    }
                                })
                    }else {
                        throw new Error('File already exists');
                    }
                })
            })
        })
};

await decompress();