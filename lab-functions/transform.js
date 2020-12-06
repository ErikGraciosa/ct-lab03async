const fsPromises = require('fs').promises;

const transform = async (source) => {
    try {
        const updatedText = await fsPromises.readFile(source, 'utf-8')
            .then(text => text.split('')
                .filter(char => !(/[A-Z]/.test(char)))
                .map(char => char.toUpperCase())
                .reverse()
                .join(''));
        return updatedText;    
    } catch(err) {
        console.log(err);
    }
}

module.exports = { transform }