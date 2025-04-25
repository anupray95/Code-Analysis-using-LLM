const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");

const recursiveSplitter = (chunkSize = 700, chunkOverlap = 20) => (new RecursiveCharacterTextSplitter({
  chunkSize,
  chunkOverlap,
}));

const chunkText = async (text) => {
    const splitter = recursiveSplitter(25000, 10);
    const docs = await splitter.splitText(text);
    return docs
}

module.exports = {
    chunkText
}