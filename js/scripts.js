// creo 5 numeri random e li metto nella pagina html


let ArrayNum = [];

for (let i = 0; i < 5; i++) {
    const GenerateRandomNumber = parseInt(Math.floor((Math.random() * 100) + 1));
    console.log(GenerateRandomNumber);
    ArrayNum.push(GenerateRandomNumber);
    let RandomNumber = document.getElementById('numbers');
    RandomNumber.innerText += ' ' + GenerateRandomNumber;
}

// creo il timer di 30 secondi

let Timing = null

Timing = setInterval( function() {
    let Timer = parseInt(document.getElementById('timer').innerText);
    Timer--;
    console.log(Timer);
    document.getElementById('timer').innerText = Timer;

     // per stoppare il timer
    if(Timer == 0) {
        clearInterval(Timing);
        Timing = null;

        // chiedo all'utente i numeri
        let GuessedNum = 0;
        for (let i = 0; i < 5; i++) {
            const AskUser = parseInt(prompt('Inserisci numero'));
            
            // vedo quanti ne ha indovinati
            if (AskUser == ArrayNum[i]) {
                GuessedNum++;
            } 
        };
        alert('Complimenti, hai indovinato', GuessedNum, 'numeri!');
        console.log('Numeri indovinati:', GuessedNum);
        
        
    }

        
}, 1000);