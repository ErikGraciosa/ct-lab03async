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


const getManyCharacters = async (ids) => {
    const characterDetails = Promise.all(ids.map(async id => await getCharacter(id)));
    return characterDetails;
}

module.exports = { 
    getCharacter, getManyCharacters 
};
