function PalindromeCreator(str) { 

  // code goes here  
    if(str === str.split('').reverse().join('')){
        return 'palindrome';
    }
    
    for(let i = 0; i < str.length; i++){
        let temp = str.slice(0,i) + str.slice(i+1);
        if(temp === temp.split('').reverse().join('')){
            if(temp.length >= 3){
                return str[i];
            }
        }
    }
    
    for(let j = 0; j < str.length; j++){
        let temp = str.slice(0,j) + str.slice(j+1);
        for(let k = 0; k < temp.length; k++){
            let temp2 = temp.slice(0,k) + temp.slice(k+1);
            if(temp2 === temp2.split('').reverse().join('')){
                if(temp2.length >= 3){
                    return str[j] + temp[k];
                }
            }
        }
    }
    
    return 'not possible';
         
}
   
// keep this function call here 
PalindromeCreator(readline());