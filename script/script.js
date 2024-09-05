console.log(`JS OK`);

const { createApp } = Vue;

createApp({
    data() {
        return {
            messaggio: 'Benvenuto nel mio sito!',
            immagineUrl: 'https://picsum.photos/400/300'
        }
    }
}).mount('#app');
