import {dirname, sep,} from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.cjs';
import object2 from "./files/a.json" with { type: "json" };
import object3 from "./files/b.json" with { type: "json" };

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = object2
} else {
    unknownObject = object3
}

const path = fileURLToPath(import.meta.url)
const __dirname = dirname(path);
const __filename =  path.split('\\')[path.split('\\').length-1];

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

