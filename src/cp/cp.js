import child_process from 'child_process';

const spawnChildProcess = async (args) => {

const s_process = child_process.spawn('node', ['src/cp/files/script.js', ...args]);

process.stdin.on('data', (data) => {
    s_process.stdin.write(data);
})
s_process.stdout.on('data', (data) => {
    process.stdout.write(data);
})

s_process.on('exit', (code) => {
    if (code !== 0) {
        console.error(`Child process exited with code ${code}`);
    }
});

};

// Put your arguments in function call to test this functionality
spawnChildProcess([0,1,2,3,4]);
