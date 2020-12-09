const fs = require('fs');
const { copy } = require('./copyfile.js');
const { reader, writer } = require('./utils.js');

const source = './lab-functions/README.md';
const destination = './lab-functions/CopyOfREADME.md';

describe('Test verifies that function copies a file', () => {

  afterEach(() => {
    return fs.rmSync('./lab-functions/CopyOfREADME.md');
  });

  it('test will call copy function and verify new file is present', async () => {
    await copy(source, destination);
    const exists = await fs.existsSync(destination);
    expect(exists).toEqual(true);
  });

   

});