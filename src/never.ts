export{}; 

//呼び出し元に戻らない：never
//void型は何も返さないが呼び出し元に戻る
function error(message: string): never {
    throw new Error(message);
}

// エラーハンドリング
try{
    let result = error('test');
    console.log({ result });
}catch(error){
    console.log({error});
}

let foo: void = undefined;
// never型はnever型を返せる
let bar: never = error('only me');
