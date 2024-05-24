adj=("crazy","amazing","fire");
shop=("food","engine","garments");
ano=("bros","limited","hub");
let first,second,third;
let random = Math.random();
if (random<0.33){
    first="crazy"
}
else if (0.33<random && random>=0.66){
    first="amazing"
}
else {
    first=("fire")
}
let random1 = Math.random();
if (random1<0.33){
   second="food"
}
else if (0.33<random1 && random1>=0.66){
    second="engine"
}
else{
    second=("garments")
}
let random3 = Math.random();
if (random3<0.33){
    third="bros"
}
else if (0.33<random3 && random3>=0.66){
    third="limited"
}
else if(0.66<random3<1){
    third="hub"
}
console.log(`${first},${second},${third}`)


