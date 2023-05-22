
// // ----Palindrome check----

// const userword = prompt('inserisci una parola:');

// let reverseword = '';

// for(i = 0; i < userword.length; i++){
//     reverseword = userword[i] + reverseword;
// }

// pal (userword, reverseword);


// // ----------------
// // ----Function----
// // ----------------

// /**
//  * 
//  * @param word The word that user choosed to check
//  * @param revword The user word but reversed
//  * @returns Check if the user word is palindrome
//  */
// function pal (word,revword){
//     if(word === revword){
//         console.log(word+' e '+revword+' sono palindromi')
//     }else{
//         console.log(word+' e '+revword+' non sono palindromi')
//     }
// }

// ----Pari o dispari----

let choice;
let number;

while (true) {
    choice = prompt('Scegli tra pari e dispari');
    if (choice === 'pari') {
        console.log('Hai scelto pari');
        break;
    } else if (choice === 'dispari') {
        console.log('Hai scelto dispari');
        break;
    } else {
        console.log('Scelta errata');
    }
}

while (true) {
    number = parseInt(prompt('Scegli un numero da 1 a 5'));
    if (number <= 5 && number >= 1) {
        console.log('Hai scelto: '+number);
        break;
    } else {
        console.log('Numero non compreso tra 1 e 5');
    }
}

let randomnum = getRandomInt(1, 6);

const total = number + randomnum;

oddoreven(total, choice, randomnum)

// // ----------------
// // ----Function----
// // ----------------

/**
 * 
 * @param min Minimum number to start picking
 * @param max Maximum number that can be picked (max value not included)
 * @returns Give a random number between min and max
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

/**
 * Tell if the user choice was right and he won or not
 * @param num The total number
 * @param userchoice The choice of the user of odd or even
 * @param ainum The random number picked by the ai
 */
function oddoreven(num, userchoice, ainum){
    if(num % 2 == 0 && userchoice === 'pari'){
        console.log("Il banco ha fatto "+ainum+" che sommato al numero del giocatore fa: "+num+". Il giocatore aveva scelto "+userchoice+" quindi il giocatore vince!")
    }else if(num % 2 !== 0 && userchoice === 'dispari'){
        console.log("Il banco ha fatto "+ainum+" che sommato al numero del giocatore fa: "+num+". Il giocatore aveva scelto "+userchoice+" quindi il giocatore vince!")
    }else if(num % 2 !== 0 && userchoice === 'pari'){
        console.log("Il banco ha fatto "+ainum+" che sommato al numero del giocatore fa: "+num+". Il giocatore aveva scelto "+userchoice+" quindi il banco vince!")
    }else if(num % 2 == 0 && userchoice === 'dispari'){
        console.log("Il banco ha fatto "+ainum+" che sommato al numero del giocatore fa: "+num+". Il giocatore aveva scelto "+userchoice+" quindi il banco vince!")
    }
}