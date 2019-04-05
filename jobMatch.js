/**
 * https://www.codewars.com/kata/job-matching-number-3/train/javascript
 * Cndidate: 
 * preference: {desired, neutral, avoid}
 */
let candidate = {
  skills: [
  	{ name: 'CoffeeScript', experience: 3, preference: 'neutral' },
    { name: 'JavaScript', experience: 2, preference: 'desired' },
    { name: 'Python', experience: 1, preference: 'avoid' },
    { name: 'C++', experience: 1, preference: 'avoid' }
  ]
}

let job = { 
  skills: [{ name: 'CoffeeScript', idealYears: 3, substitutions: [{ name: 'JavaScript' }, { name: 'Java' }] }]
}

console.log(job.skills[0].name);
// console.log(job.skills[0].substitutions[0].name);
// candidate.skills.filter(skill => skill[0].preference == "desired");

var avoidSkills = new Array();
candidate.skills.filter(skill => skill.preference == "avoid");
// candidate.skills.filter(skill => skill.preference == "avoid").reduce(function(object) { return object.name});
candidate.skills.filter(skill => skill.preference == "avoid").reduce(object => object.name);

var avoid = candidate.skills.filter(skill => skill.preference == "avoid");
// avoidSkills.push.apply(avoidSkills, avoid.reduce( ([], object) => [].push(object.name) ));
// candidate.skills.filter(skill => skill.preference == "avoid").reduce(function(accumulator, currentValue, currentIndex, array) { return currentValue.name})



function match(candidate, job) { 
  // is the job a match for this candidate?

  if (avoidSkills.length == 0) {
    return false;
  }
  // job.skills.[0].name.
}
