// Scrivi un programma che stampi i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Stampare in console.

//Stampo i numeri da 1 a 100

for(i = 1 ; i <= 100 ; i++); {
    if(i % 3 === 0); {
        console.log('Fizz');
    }
    
    if(i % 5 === 0); {
        console.log('Buzz');
    }
   
   if(i % 3 === 0, i % 5 === 0); {
       console.log('FizzBuzz');
   }
}