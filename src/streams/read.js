import {createReadStream} from 'fs';

const read = async () => {
   const read = createReadStream('src/streams/files/fileToRead.txt',  {
    encoding: 'utf-8',
},)
   read.on('data', (chunk) => {
    process.stdout.write(chunk + '\n')
   })
   read.on('error', (error) => {
    console.error(error)
   })
};

await read();