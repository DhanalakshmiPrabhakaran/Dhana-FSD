var flag = true;
console.log(varVariable);
function variableScopeExample(){
    if(flag){
        var varVariable="I am var";
        let letVariable="I am let";
        const constVariable="I am const";
             }
             console.log(varVariable);

}
variableScopeExample()