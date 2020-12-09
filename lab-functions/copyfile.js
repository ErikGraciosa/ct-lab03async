const fsPromises = require('fs').promises;

const copy = async (source, destination) => {
    try {
        await fsPromises.readFile(source, 'utf-8')
            .then(data => fsPromises.writeFile(destination, data));
    } catch(err) {
        console.log(err);
    }
}

module.exports = { copy }
