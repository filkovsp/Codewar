/**
 * https://www.codewars.com/kata/56c2578be8b139bd5c001bd8
 */
function match(job, candidates) {
  // Which of these candidates match this job?
  var result = new Array();
  candidates.forEach(function(candidate) {
    if ((candidate.desiresEquity && job.equityMax > 0) || !candidate.desiresEquity) {
      var candidateLocations = candidate.desiredLocations.concat(candidate.currentLocation);
      if (candidateLocations.filter(location => job.locations.includes(location)).length > 0) {
        result.push(candidate);
      }
    }
  });

  return result;
}
