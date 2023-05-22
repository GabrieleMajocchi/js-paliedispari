
// ----Palindrome check----

const userword = prompt('inserisci una parola:');

let reverseword = '';

for(i = 0; i < userword.length; i++){
    reverseword = userword[i] + reverseword;
}

pal (userword, reverseword);


// ----------------
// ----Function----
// ----------------

/**
 * 
 * @param word The word that user choosed to check
 * @param revword The user word but reversed
 * @returns Check if the user word is palindrome
 */
function pal (word,revword){
    if(word === revword){
        console.log(word+' e '+revword+' sono palindromi')
    }else{
        console.log(word+' e '+revword+' non sono palindromi')
    }
}

