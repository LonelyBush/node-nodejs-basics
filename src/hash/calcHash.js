import {createReadStream} from 'fs'
import crypto from 'crypto'

const calculateHash = async () => {
   const fs = createReadStream('src/hash/files/fileToCalculateHashFor.txt',
    {
        encoding: 'utf-8',
    },
   )
fs.on('data', (chunk) => {
    var hash = crypto.createHash('sha256').update(chunk).digest('hex')
    console.log(hash)
})
};

await calculateHash();