
import {isMainThread, Worker,  setEnvironmentData, getEnvironmentData,} from 'worker_threads';
import {availableParallelism, cpus} from  'os'

const performCalculations = async () => {
  const cpuCores = availableParallelism();
  const workers = [];
  const results = []

  for (let i = 0; i < cpuCores; i++) {
      const workerData = 10 + i;
      workers.push(new Promise((resolve) => {
          const worker = new Worker('./src/wt/worker.js', { workerData });

          worker.on('message', (message) => {
              results[i] = { status: 'resolved', data: message };

              resolve();
          });

          worker.on('error', () => {
              results[i] = { status: 'error', data: null };
              resolve();
          });

          worker.on('exit', (code) => {
              if (code !== 0) {
                  results[i] = { status: 'error', data: null };
              }
              resolve();
          });
      }));
  }

  await Promise.all(workers);
  console.log(results);

};

await performCalculations();