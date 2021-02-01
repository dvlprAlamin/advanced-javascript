//Falsy:
// false
// 0
// ""
// undefined
// null
// NaN

//Truthy:
//'0', ' ', [], {} etc...
let num = 12;
if(num  || num == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}