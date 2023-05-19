// Find vowels numbers from a sentence 

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

const findVowels =(sentence) =>{
    const letters=Array.from(sentence);
    let count =0;
    letters.forEach((values)=>{
        if(vowels.includes(values)){
            count++;
        }
    })
    return count;
}

console.log(findVowels('The weather is so beautiful'));