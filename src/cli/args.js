const parseArgs = () => {
    const sort = []
    process.argv.forEach((arg, index, array) => {
        if(arg.startsWith('--')){
            sort.push(`${arg.slice(2)} is ${array[index+1]}`)
        }
    })
    console.log(sort.join(', '));
};

parseArgs();