const fs = require('fs-extra');

const saveToJson = async (data, outputPath = 'finalResult.json') => {
  await fs.writeJson(outputPath, data, { spaces: 2 });
};

module.exports = { saveToJson };
