// NOT

// crea bottone 
const PlayButton = document.getElementById('play_btn');

// quando lìutente clicca il bottone allora

PlayButton.addEventListener('click', function() {

    // contenitore della griglia
    const Grid = document.getElementById('grid_container');
    console.log('Grid', Grid, typeof Grid);

    for(let i = 0; i < 100; i++) {

        const NewCell = document.createElement('div');
        NewCell.classList.add("grid_container_cells");
        console.log('Nuova Cella', NewCell, typeof NewCell);
        NewCell.innerHTML =  i + 1 ;

        // aggiungo le nuova celle al contenitore della griglia
        Grid.append(NewCell);
        
        NewCell.addEventListener('click', function() {
            NewCell.classList.add("cells_clicked");
            console.log(NewCell.innerHTML);
        })

    }

})
 


