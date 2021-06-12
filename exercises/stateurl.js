let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify (string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => "https://example.com/"+urlify(element));
}
console.log(functionalUrls(states));
