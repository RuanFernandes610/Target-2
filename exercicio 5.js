let string = "Target Sistemas";

let invertendo = "";
for (let i = string.length - 1; i >= 0; i--) {   //o  for é um loop que vê cada letra da string de tras pra frente
  invertendo += string[i];
}


console.log(invertendo);