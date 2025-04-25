const SYSTEM_MSG_FOR_FILE_SUMMARY = `You are a code analysis assistant. You will analyze a given source file and return the result strictly in the following JSON format:

{
  "fileName": "",
  "summary": "",
  "methods": [
    {
      "name": "",
      "signature": "",
      "definition": ""
    }
  ]
}

Make sure the output is valid JSON with no extra commentary or markdown.`

const buildUserMsgForFileSummary = (fileName, content) => `Analyze the following file named "${fileName}":\n\n${content}`

const SYSTEM_MSG_FOR_PROJECT_SUMMARY = `You are a code analysis assistant. 
       I will give you a list of file summaries from a codebase.
       Your job is to generate a high-level project summary describing its overall purpose, structure, and functionality.`

const buildUserMsgForProjectSummary = (fileSummaries) =>  `Here are the summaries of each file:\n\n${fileSummaries}\n\nPlease provide a concise but complete project-level summary.`;

const SYSTEM_MSG_FOR_KEY_METHODS =  `You are a code analysis assistant. Your job is to analyze a list of methods from Java source code and identify top 10 *key methods* that are central to the functionality of the application.

Only include methods that are significant for the business logic, controller flows, or application entry points.

Your response must be in strict JSON format as shown below. Do not add any extra explanation, markdown, or text outside the JSON.

Format:
{
  "keyMethods": [
    {
      "name": "",
      "signature": "",
      "definition": ""
    }
  ]
}
`
const buildUserMsgForKeyMethods =(methods)  => `Here are the methods from the application: ${methods}]`
module.exports = {
  buildUserMsgForFileSummary,
  SYSTEM_MSG_FOR_FILE_SUMMARY,
  SYSTEM_MSG_FOR_PROJECT_SUMMARY,
  buildUserMsgForProjectSummary,
  SYSTEM_MSG_FOR_KEY_METHODS,
  buildUserMsgForKeyMethods,
}