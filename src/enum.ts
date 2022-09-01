export{}; 

//　列挙型 シーケンスを降ることができる
//  複数形はsつける

enum Months {
    January = 1,
    February,
    March,
    April,
    May,
    Jun,
    July,
    August,
    September,
    October,
    November,
    December
}

console.log(Months.January);
Months.February;

// Javascript
const MonthsJs = {
    January: 0,
    February: 1
};

enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#008000',
    BLUE = '#0000FF',
//    YELLOW = '#FFFF00',
    BLUCK = '#000000'
}

let green = COLORS.GREEN;

enum COLORS{
    YELLOW = '#FFFF00',
    GRAY = '#808080'
}

COLORS.YELLOW;