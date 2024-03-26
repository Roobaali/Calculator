#!  /usr/bin/env node  
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter FirstNumber", type: "number", name: "FirstNumber" },
    { message: "Enter secondNumber", type: "number", name: "SecondNumber" },
    {
        message: "select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtration", "multiplication", "division"],
    },
]);
console.log(answer);
//conditional statement
if (answer.operator === "addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "subtration") {
    console.log(answer.FirstNumber - answer.SecondName);
}
else if (answer.operator === "multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("please select valid operator");
}
