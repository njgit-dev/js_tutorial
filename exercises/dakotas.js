let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

//Imperative Dakota filter using String#includes method
function imperativeDoublesIncludes(elements) {
  let doubles = [];
  elements.forEach(function(element) {
    if (element.includes("Dakota")) {
      doubles.push(element);
    }
  });
  return doubles;
}
console.log(imperativeDoublesIncludes(states));

// doubles, dakotas: Functional version using includes
function functionalDoublesIncludes(elements) {
  return elements.filter(element => element.includes("Dakota"));
}
console.log(functionalDoublesIncludes(states));


//Imperative Dakota Filter using regex.length == 2
// Doubles, Dakota: Imperative version
function imperativeDoublesRegex(elements) {
  let doubles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 2) {
      doubles.push(element);
    }
  });
  return doubles;
}
console.log(imperativeDoublesRegex(states));

// doubles, dakotas: Functional version using regex
function functionalDoublesRegex(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalDoublesRegex(states));

