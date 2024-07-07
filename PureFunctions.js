let number = 1;

function impure(a){
    number +=a;
    return (number);
}
function pure(a, b){
    return (a+b);
}
console.log (impure (2))
console.log (impure (2))
console.log (impure (2))
console.log (`-`.repeat(20));
console.log(pure(1, 2))
console.log(pure(1, 2))
console.log(pure(1, 2))

