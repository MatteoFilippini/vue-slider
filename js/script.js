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
        // creo l'index che mi terra traccia di tutto lo slide
        currentIndex: 0,
        // creo una varibile per fermare il setInterval
        interval: 0,
        // creo l'oggetto immagini
        images: [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg',
            'images/image4.jpg'
        ]
    },
    methods: {
        // aggangio l'index delle immagini con quello dello slider
        isActive(index) {
            return this.currentIndex === index;
        },

        // vai alla prossima immagine fino all'ultima poi rinizia
        nextPic() {
            if (this.currentIndex !== this.images.length - 1) this.currentIndex++;
            else this.currentIndex = 0;
        },

        // vai alla precedete immagine fino alla prima poi rinizia
        prevPic() {
            if (this.currentIndex !== 0) this.currentIndex--;
            else this.currentIndex = this.images.length - 1
        },

        // al click del bottone vado all'immagine stabilita
        viewPic(index) {
            this.currentIndex = index;
        },

        // quando vado sui bottoni si ferma il setInterval
        stop() {
            clearInterval(this.interval)
        },
        play() {
            // ogni secondo
            this.interval = setInterval(() => {
                // chiamo la funzione che mi fambia l'immagine
                this.nextPic();
            }, 3000)
        }
    },
    created() {
        // alla crazione della pagina faccio partire lafunzione play
        this.play()
    }




})


