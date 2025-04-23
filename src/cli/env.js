const parseEnv = () => {
    let search = [];
    for (let key in process.env) {
        if(key.startsWith('RSS_')){
            search.push(`${key}=${process.env[key]}`);
        }
      }
      console.log(search.join('; '));
};

parseEnv();