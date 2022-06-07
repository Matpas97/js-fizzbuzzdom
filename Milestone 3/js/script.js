

//MILESTONE 3
//Per ogni numero, dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
//Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 (seguendo le regole della Milestone 1).

// Appendo un elemento html con il numero o la stringa corretta

const mainContainer = document.querySelector('.container');



 for(let i = 1; i <= 100; i++) {
     const newContainer = document.createElement('div');
     newContainer.innerHTML = ` ${i}`;
     newContainer.classList.add('mia-classe');
     mainContainer.append(newContainer);
 }

for(let i = 1; i <= 100; i++) {
    const newContainer = `
    <div class="mia-classe">
         ${i}
    </div>
    `;
    mainContainer.innerHTML += newContainer;
}