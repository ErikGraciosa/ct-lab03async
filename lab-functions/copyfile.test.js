const fsPromises = require('fs').promises;
const { copy } = require('./copyfile.js');
const { reader, writer } = require('./utils.js')


describe('Test verifies that function copies a file', () => {
  it('test will call copy function and verify new file is present', () => {
    copy(source, destination);
    expect().toEqual();
  });
});