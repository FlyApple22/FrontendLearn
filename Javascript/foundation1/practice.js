let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;
const markBmi = markWeight / markHeight ** 2;
const johnBmi = johnWeight / (johnHeight * johnHeight);
let markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);

