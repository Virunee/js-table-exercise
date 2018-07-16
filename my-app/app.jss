const newCandidates = [
  { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
  { name: "Mario", skills: ["Python", "AWS"] },
  { name: "Jacquline", skills: ["JavaScript", "Azure"] },
  { name: "Kathy", skills: ["JavaScript", "Java"] },
  { name: "Anna", skills: ["JavaScript", "AWS"] },
  { name: "Matt", skills: ["PHP", "AWS"] },
  { name: "Matt", skills: ["PHP", ".Net", "Docker"] },
];

function removeRowsFromTable(table) {
  const rows = table.getElementsByTagName("tr");

  while (rows.length > 1) {
    table.deleteRow(1);
  }
}

function insertCandidate(tbody, name, skills) {
  const newRow = tbody.insertRow();
  const nameCell = newRow.insertCell();
  const skillCell = newRow.insertCell();

  const candidateName = document.createTextNode(name);
  const candidateSkills = document.createTextNode(skills.join(', '));

  nameCell.appendChild(candidateName);
  skillCell.appendChild(candidateSkills);
}

function addCandidatesToTable(table, candidates) {
  candidates.forEach(candidate => insertCandidate(table, candidate.name, candidate.skills));
}

function filterCandidateBySkill(candidates, skill) {
  var filtered_object = [];
  for(i = 0; i < candidates.length; i++) {
    var skills_list = candidates[i]["skills"];
    for(k = 0; k < skills_list.length; k++) {
      var candidate_skill = skills_list[k];
      if(candidate_skill === skill) {
        filtered_object.push(candidates[i]);
      }
    }
  }
  return filtered_object;
}

function addFilteredTableToHtml(filterName) {
  const candidatesTable = document.getElementById("candidates_example");
  const newCandidatesTable = candidatesTable.cloneNode(true);
  removeRowsFromTable(newCandidatesTable);
  const newTbody = newCandidatesTable.getElementsByTagName('tbody')[0];
  const filteredCandidates = filterCandidateBySkill(newCandidates, filterName)
  addCandidatesToTable(newTbody, filteredCandidates)

  //Creates the heading elements for each table
  var headingElement = document.createElement("h2");
  var headingText = document.createTextNode("Candidates (filtered by " + filterName + ")");
  headingElement.appendChild(headingText);
  document.getElementById('extraTables').appendChild(headingElement);
  document.getElementById('extraTables').appendChild(newCandidatesTable);
}

//Create each filtered table
addFilteredTableToHtml('JavaScript');
addFilteredTableToHtml('AWS');
addFilteredTableToHtml('Docker');
