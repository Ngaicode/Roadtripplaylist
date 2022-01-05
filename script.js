'use strict';


// function declaration
function questionPrompt(name) {
    const swali = `${name},  Have you eaten ?`;
    return swali;
}

console.log(questionPrompt("Kevin"));



// function expression
const expresion = function (jina) {
    const swali = `${jina},  Have you eaten ?`;
    return swali;
}

console.log(expresion("Mjomba"));




// arrow functions
const arrow = nem => {
    const swali = `${nem},  Have you eaten ?`;
    return swali;
}
console.log(arrow("Ngai"))


