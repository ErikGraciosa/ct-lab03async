const fetch = require('node-fetch');

const getCharacter = async (id) => {
    const { name, status, species } = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json());
    const profile = {};
    profile.name = name;
    profile.status = status;
    profile.species = species;
    return profile;
}

module.exports = { getCharacter };
