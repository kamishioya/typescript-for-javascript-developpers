export{}; 

// undefined型はreturnを書かないといけない
// returnがない関数はvoid型
function returnNothing() : void{
    console.log("何も返さないよ");
}

console.log(returnNothing());