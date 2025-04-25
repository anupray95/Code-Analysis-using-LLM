const { ChatOpenAI } = require('langchain/chat_models/openai');
const { HumanMessage, SystemMessage } = require('langchain/schema');

const getResponseFromOpenAI = async (systemMsg, userMsg) => {
  console.log("Using API Key:", process.env.OPENAI_KEY?.slice(0, 10));

  const chat = new ChatOpenAI({
    modelName: 'gpt-4',
    temperature: 0.9,
    openAIApiKey: process.env.OPENAI_KEY,
  });

  const systemMessage = new SystemMessage(systemMsg);
  const userMessage = new HumanMessage(userMsg);

  const response = await chat.call([systemMessage, userMessage]);
  return response.content;
};

module.exports = {
    getResponseFromOpenAI
}