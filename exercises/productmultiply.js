let numbers = [5, 5, 5, 5];

// Returns the product of all elements in an array (Imperative solution)
function imperativeProduct(elements) {
  let product = 1;
  elements.forEach(function(element) {
    product*=element;
  });
  return product;
}
console.log(imperativeProduct(numbers));

// Returns the product of all elements in an array (functional solution)
function functionalProduct(elements) {
  return elements.reduce((product,n) => product*=n);
}
console.log(functionalProduct(numbers));


//==============

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));


