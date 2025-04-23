import {open, writeFile} from 'fs'

const create = async () => {
    open('src/fs/files/fresh.txt', 'r+', (err) => {
        if(err){
            return  writeFile('src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
                if(err){
                    return console.error(err)
                }
            })
        }else {
            throw new Error('FS operation failed')
        }
    })
};

await create();