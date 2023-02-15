const { createApp } = Vue

createApp({
  data() {
    return {
      contacts: [
        {
          name: 'Michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              text: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              text: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: './img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              text: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              text: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              text: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              text: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              text: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              text: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              text: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              text: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: './img/avatar_6.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              text: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Non ancora',
              status: 'received'
            },
            {
              date: '10/01/2020 15:51:00',
              text: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              text: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: './img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              text: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:51:00',
              text: 'OK!!',
              status: 'received'
            }
          ],
        }
      ],
      // variabile per sapere la chat attiva
      activeList: 0,
      // variabile per intercettare il messaggio scritto
      currentMessage: "",
      // variabile per saper se inivare una risposta
      userAnswer: false,
      // variabile per intercettare la ricerca
      currentSearch: "",
    }

  },

  methods: {
    // per capire che chat mostrare
    changeActiveList(index) {
      this.activeList = index;
    },

    // per scrivere un nuovo messaggio
    addNewMessage() {
      // salvo il nuovo messaggio in una varibile scollegata 
      const newMessage = this.currentMessage;
      // pusho, in base alla chat attiva, nell'array messaggi
      this.contacts[this.activeList].messages.push({
        date: '10/01/2020 15:51:00',
        text: newMessage,
        status: 'sent'
      });
      // attivo la risposta
      this.userAnswer = true;
    },

    // per mandare una risposta
    sendAnswer() {
      // controllo se devo rispondere
      if (this.userAnswer == true) {
        setTimeout(() => {
          // creo la risposta automatica
          this.contacts[this.activeList].messages.push({
            date: '10/01/2020 15:51:00',
            text: 'Ok',
            status: 'received'
          });
          this.userAnswer = false;
        }, 1000);
      }
    },

    // trova un contatto
    findContact() {
      // definisco la lunghezza di caratteri da confrontare
      const lengthToCompare = this.currentSearch.length;

      // creo il mio nuovo array con la quantità di caratteri da confrontare
      let newContacts = [];

      // definisco una variabile per salvare i miei nuovi nomi
      let newName = "";
      for (contact of this.contacts) {
        for (let i = 0; i < lengthToCompare; i++) {
          newName = newName + contact.name[i];
        };
        newContacts.push(newName);
        newName = "";
      }

      // confronto i nuovi contatti con la mia ricerca 
      for (let y = 0; y < newContacts.length; y++) {
        if (this.currentSearch != newContacts[y]) {
          this.contacts[y].visible = !this.contacts[y].visible;
          console.log(this.contacts[y]);
        };
      };

    }
  }
}).mount('#app')