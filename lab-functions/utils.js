// async/await
const fs = require('fs').promises

async function reader(source) {
  try {
    const data = await fs.readFile(source, 'utf-8');
  } catch(err) {
    console.log(err);
  }
}

async function writer(destination, data)  {
  try {
    await fs.writeFile(destination, data)
  } catch(err) {
    console.log(err);
  }
}

//globalData.then(data => writer(data));
async function readWrite(source, destination) {
    const data = await reader(source);
    writer(destination, data);
}

// readWrite();

module.exports = {
  reader, writer, readWrite
}