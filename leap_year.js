// Find Leap year 

const leap_year = (year) =>{
    if(year%400===0){
        return year+''+' is a leap year';
    }
    else if(year%100===0){
        return year+''+' is not a leap year';
    }
    else if(year%4===0){
        return year+''+' is a leap year';
    }
    else{
        return year+ '' + ' is not a leap year';
    }
}

console.log(leap_year(2028));