const fs = require('fs');
const { copy } = require('./copyfile.js');
const { reader, writer } = require('./utils.js');

const source = './lab-functions/README.md';
const destination = './lab-functions/CopyOfREADME.md';

describe('Test verifies that function copies a file', () => {
  it('test will call copy function and verify new file is present', () => {
    copy(source, destination);
    const exists = fs.existsSync(destination);
    expect(exists).toEqual(true);
  });
});