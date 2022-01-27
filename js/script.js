/*
Descrizione:
Partendo dal markup fornito in allegato, implementare la logica per far funzionare lo slider:
Deve essere possibile scorrere le immagini cliccando sulle freccette.
I pallini in basso devono illuminarsi in base all'immagine che sto visualizzando.
Far si che cliccando i pallini, venga selezionata l'immagine corrispondente.
*/

const root = new Vue({
    el: '#root',
    data: {
        images: [
            'image/image1.png',
            'image/image2.png',
            'image/image3.png',
            'image/image4.png',
        ]
    }
})
