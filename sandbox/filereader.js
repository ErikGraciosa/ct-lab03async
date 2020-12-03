// async/await
const fs = require('fs').promises

async function reader() {
  try {
    const data = await fs.readFile('./README.md', 'utf-8');
    console.log(data);
    return data;
  } catch(err) {
    console.log(err);
  }
}

const globalData = reader();


async function writer(data)  {
  try {
    await fs.writeFile('./async-cool.txt', data)
    console.log('done');
  } catch(err) {
    console.log(err);
  }
}

globalData.then(data => writer(data));






// async function readWrite() {
//     const globalData = await reader();
//     writer(globalData);
// }

// readWrite();