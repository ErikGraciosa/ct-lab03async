const fs = require('fs');
const { copy } = require('./copyfile.js');
const { transform } = require('./transform.js');

const source = './lab-functions/README.md';
const destination = './lab-functions/CopyOfREADME.md';

describe('Test verifies that function copies a file', () => {

  afterAll(() => {
    return fs.rmSync('./lab-functions/CopyOfREADME.md');
  });

  it('test will call copy function and verify new file is present', async () => {
    await copy(source, destination);
    const exists = await fs.existsSync(destination);
    expect(exists).toEqual(true);
  });

  it('test will call copy function and verify new file is present', async () => {
    const response = await transform(source);
    expect(response).toEqual('.ELIF  .TSET NI DEIPOC EB OT ELI');
  });

});