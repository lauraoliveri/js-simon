// creo 5 numeri random e li metto nella pagina html
for (let i = 0; i <= 5; i++) {
    const GenerateRandomNumber = parseInt(Math.floor((Math.random() * 100) + 1));
    console.log(GenerateRandomNumber);
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

        for (let i = 0; i < 5; i++) {
            const AskUser = prompt('Inserisci numero');
            
        }
    };
}, 1000);