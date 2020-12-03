const fsPromises = require('fs').promises;



const copy = async (source, destination) => {
    try {
        await fsPromises.readFile(source, 'utf-8')
            .then(data => fsPromises.writeFile(destination, data));
            console.log('copy is done');
    } catch(err) {
        console.log(err);
    }
}

copy('README.md', 'CopyOfREADME.md' );

module.exports = { copy }
