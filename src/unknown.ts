export{}; 

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

// typeガード　
//　暫定的にUnknown型を使いTypeOfで型を狭めていく
if(typeof numberUnknown === 'number'){
    let sumUnknown = numberUnknown + 10;
}

