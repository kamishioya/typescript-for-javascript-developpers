export{}; 

// functionと同じく、引数、戻り値に型を付与できる
let bmi: (height: number, weight: number) => number = (height: number, weight: number): number => weight / (height * height);

console.log(bmi(1.78,86))
