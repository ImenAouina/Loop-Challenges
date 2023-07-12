//odds 1-20//
console.log("odds 1-20")
for(var i=1; i<=20; i++){
    if(i%2!==0){
        console.log(i);
    }
}
console.log("Multiples of 3")
//Decreasing Multiples of 3(100 down to 0)//
for(var i=100; i>=0; i--){
    if(i%3 == 0){
        console.log(i);
    }
}
console.log("Sigma")
//Sigma (1-100)
var sum=0;
for(var i=1; i<=100; i++){
    sum+=i;
}
console.log(sum);

//Factorial (1-12)
console.log("Factorial")
var product=1;
for(var i=1; i<=12; i++){
    product*=i;
}
console.log(product);
////////////////


