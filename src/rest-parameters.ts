export{}; 

// rest-parametersはいくらでも引数を与える

const sum: (...values: number[]) => number = (...values: number[]): number => {
    
    console.log(values);
    return 100;
};

sum(1,2,3,4,5);