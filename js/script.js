/*
Descrizione:
Partendo dal markup fornito in allegato, implementare la logica per far funzionare lo slider:
Deve essere possibile scorrere le immagini cliccando sulle freccette.
I pallini in basso devono illuminarsi in base all'immagine che sto visualizzando.
Far si che cliccando i pallini, venga selezionata l'immagine corrispondente.

Bonus:
1- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sulle freccette o sui pallini l'autoplay si interrompe
3 - l'autoplay riparte quando il mouse lascia le freccette o i pallini
*/

const root = new Vue({
    el: '#root',
    data: {

        currentIndex: 0,

        images: [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg',
            'images/image4.jpg'
        ]
    },
    methods: {
        isActive(index) {
            return this.currentIndex === index;
        },

        nextPic() {
            if (this.currentIndex !== this.images.length - 1) this.currentIndex++;
            else this.currentIndex = 0;
        },

        prevPic() {
            if (this.currentIndex !== 0) this.currentIndex--;
            else this.currentIndex = this.images.length - 1
        },

        viewPic(index) {
            this.currentIndex = index;
        }
    },
    // created() {
    //     setInterval(() => {
    //         this.currentIndex++;
    //     }, 1000)
    // }

    // setInterval 3000ms aggiungi +1 al currentIndex



})


