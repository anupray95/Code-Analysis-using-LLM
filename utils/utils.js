function extractSummaries(data) {
  return _.flatMap(data, entry =>
    _.map(entry.insights, 'summary')
  );
}

function extractMethodDetails(data) {
  return _.flatMap(data, entry =>
    _.flatMap(entry.insights, insight =>
      _.map(insight.methods, method => `${method.name} : ${method.definition}`)
    )
  );
}

module.exports = {
    extractSummaries,
    extractMethodDetails
}