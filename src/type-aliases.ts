export{}; 

// typeは先頭は大文字
type Mojiretu = string;

const foostring: string = 'Hallo';
const fooMojiretsu: Mojiretu = 'Hallo';

type Profile = {name:string,age:number};

const example:Profile= {
    name: 'Ham',
    age: 43
};

type Profile2 = typeof example;