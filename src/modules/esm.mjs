import path from 'path';
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

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${path.__filename}`);
console.log(`Path to current directory is ${path.__dirname}`);

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

