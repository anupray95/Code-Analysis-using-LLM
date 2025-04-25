require('dotenv').config();
const _ = require('lodash');
const { readAllJavaFiles } = require('./utils/readAllFiles');
const { extractMethodDetails, extractSummaries } = require('./utils/utils');
const { chunkText } = require('./utils/chunkText');
const { getResponseFromOpenAI } = require('./utils/langchainUtils');
const { SYSTEM_MSG_FOR_FILE_SUMMARY, buildUserMsgForFileSummary, SYSTEM_MSG_FOR_PROJECT_SUMMARY,
  buildUserMsgForProjectSummary, SYSTEM_MSG_FOR_KEY_METHODS, buildUserMsgForKeyMethods } = require('./utils/buildLLMPrompt');
const { saveToJson } = require('./utils/saveToJson');


(async () => {
  // read all files and their contents
  const files = await readAllJavaFiles('./SakilaProject');
  const output = [];

  // chunk files if necessary
  for (let file of files) {
    const chunks = await chunkText(file.content);
    const insights = [];

    for (let chunk of chunks) {
      const analysis = await getResponseFromOpenAI(SYSTEM_MSG_FOR_FILE_SUMMARY, buildUserMsgForFileSummary(file.path, chunk));
      insights.push(JSON.parse(analysis));
    }

    output.push({
      file: file.path,
      insights
    });
  }
  // traverse all file summaries, use OpenAi to get project summary
  const summaries = extractSummaries(output);
  const projectSummary = await getResponseFromOpenAI(SYSTEM_MSG_FOR_PROJECT_SUMMARY, buildUserMsgForProjectSummary(summaries.join('\n')));
  console.log("Summaries:", projectSummary);

  // traverse all methods and their definitons, use OpenAi to find key methods
  const allMethods = extractMethodDetails(output);
  const keyMethods = await getResponseFromOpenAI(SYSTEM_MSG_FOR_KEY_METHODS, buildUserMsgForKeyMethods(allMethods.join('\n')));

  // save output to a json file
  saveToJson({
    projectSummary,
    keyMethods: JSON.parse(keyMethods).keyMethods
  })
})();



