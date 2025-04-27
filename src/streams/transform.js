import {Transform} from 'stream'
const transform = async () => {

    const myTransform = new Transform({writableObjectMode: true, transform: (chunk, encoding, callback)=> {
        const reverseData = chunk.split('').reverse().join('');
        callback(null,reverseData);
    }})
    myTransform.setEncoding('utf-8')
    myTransform.on('data', (chunk) => {
        process.stdout.write(chunk + '\n')
        process.exit();
    })
    process.stdin.on('data', (data) => {myTransform.write(data.toString());})
};

await transform();