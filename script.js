'use strict';


// function declaration
function questionPrompt(name) {
    const swali = `${name},  Have you eaten ?`;
    return swali;
}

console.log(questionPrompt("Kevin"));





// In the case of both function expresion and arrow functions,the function names are anonymous hence these type of functions can be assigned to a variable .To call such functions ,one would use the variable name assigned to it followed by parenthesis then parameters(if any)

// function expression
const expresion = function (jina) {
    const swali = `${jina},  Have you eaten ?`;
    return swali;
}

console.log(expresion("Mjomba"));




// arrow functions
// arrow functions are a different kind of function expressions
const arrow = nem => {
    const swali = `${nem},  Have you eaten ?`;
    return swali;
}
console.log(arrow("Ngai"))


