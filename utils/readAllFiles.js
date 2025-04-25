const fs = require('fs-extra');
const fg = require('fast-glob');
const path = require('path');

const readFileContent = async(path) => {
  return await fs.readFile(path, 'utf8');
}

const readAllJavaFiles = async (baseDir) => {
  const paths = await fg([`${baseDir}/**/*.java`], {
    ignore: ['**/*test*/**']
  });
  return Promise.all(paths.map(async (filepath) => ({
    path: path.basename(filepath),
    content: await readFileContent(filepath) 
  })));
};

module.exports = { readAllJavaFiles, readFileContent };

// readCodeFiles('../SakilaProject').then(res => {
//   console.log(res.length);
//   res.map(obj => {
//     console.log(obj.path)
//   })
// }).catch(err => {
//   console.log(err.message);
// });
