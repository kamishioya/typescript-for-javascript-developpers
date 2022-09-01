export{}; 

let bmi: (heigth: number, weight: number) => number = function(heigth: number, weight: number):number{
    return weight / (heigth * heigth);
}

console.log(bmi(1.75, 96));