import {createWriteStream} from 'fs'

const write = async () => {
    const write = createWriteStream('src/streams/files/fileToWrite.txt', {encoding: 'utf-8'});

    process.stdin.on('data', data => { 
        write.write(data.toString(), (err)=> {
            if(err){
                return console.error(err)
            }
        })
        process.exit();
      });
};

await write();