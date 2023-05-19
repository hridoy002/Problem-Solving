const leap_year = (year) =>{
    if(year%400==0){
        return 'This is a leap year';
    }
    else if(year%100==0){
        return 'This is not a leap year';
    }
    else if(year%4==0){
        return 'This is a leap year';
    }
    else{
        return 'This is not a leap year';
    }
}

console.log(leap_year(1800));