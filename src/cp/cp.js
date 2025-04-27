import child_process from 'child_process';

const spawnChildProcess = async (args) => {

const s_process = child_process.spawn('node', ['src/cp/files/script.js', ...args]);

process.stdin.pipe(s_process.stdin);

s_process.stdout.pipe(process.stdout);

s_process.on('exit', (code) => {
    if (code !== 0) {
        console.error(`Chilp proc ${code}`);
    }
});

};

// Put your arguments in function call to test this functionality
spawnChildProcess([0,1,2,3,4]);
