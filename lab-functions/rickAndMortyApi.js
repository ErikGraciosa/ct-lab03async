const fetch = require('node-fetch');

const getCharacter = async (id) => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json());
    console.log(data);
}

getCharacter(5);

module.exports = { getCharacter };
