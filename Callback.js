function sub(x, y){
    return x - y;
}
function div(x, y){
    return x/y;
}

function getResults(x, y, operate){
    return operate(x,y);
}

console.log("sub method called:" , getResults(4, 2, sub));
console.log("div method called:" , getResults(4, 2, div));

