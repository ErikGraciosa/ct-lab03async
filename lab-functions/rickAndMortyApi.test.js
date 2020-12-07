const { getCharacter, getManyCharacters } = require('./rickAndMortyApi');



describe('Testing verifies getCharacter function', () => {
    it('test will call getCharacter with parameter id', async () => {
        const id = 5;
        const character = await getCharacter(id);
        expect(character).toEqual({ 
            "name": "Jerry Smith",
            "status": "Alive",
            "species": "Human"
        });
    });  

    it('test will call getManyCharacters with parameter an array of numbers and returning: name, status, species', async () => {
        const ids = [5, 4];
        const character = await getManyCharacters(ids);
        expect(character).toEqual([
            { 
                "name": "Jerry Smith",
                "status": "Alive",
                "species": "Human"
            },
            { 
                "name": "Beth Smith",
                "status": "Alive",
                "species": "Human"
            }
        ]);
      });  

  });