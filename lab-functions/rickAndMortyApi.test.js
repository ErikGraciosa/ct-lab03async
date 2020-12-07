const { getCharacter } = require('./rickAndMortyApi');



const id = 5;

describe('Testing verifies getCharacter function', () => {

    
  
    it('test will call getCharacter with parameter id', async () => {
      const character = await getCharacter(id);
      expect(character).toEqual('content');
    });  
  });