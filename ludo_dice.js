// Ludo_dice random number/ লুডু ছক্কা  

const getRandomNum =(a,b)=>{
    return Math.floor(Math.random()* (b- a+1)+ a);
}

console.log(getRandomNum(1,6));

