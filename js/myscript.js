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
              status: 'sent',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Ricordati di stendere i panni',
              status: 'sent',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
            },
            {
              date: '10/01/2020 16:15:22',
              text: 'Tutto fatto!',
              status: 'received',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
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
              status: 'sent',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
            },
            {
              date: '20/03/2020 16:30:55',
              text: 'Bene grazie! Stasera ci vediamo?',
              status: 'received',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
            },
            {
              date: '20/03/2020 16:35:00',
              text: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
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
              status: 'received',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
            },
            {
              date: '28/03/2020 10:20:10',
              text: 'Sicuro di non aver sbagliato chat?',
              status: 'sent',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
            },
            {
              date: '28/03/2020 16:15:22',
              text: 'Ah scusa!',
              status: 'received',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
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
              status: 'sent',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Si, ma preferirei andare al cinema',
              status: 'received',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
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
              status: 'sent',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Va bene, stasera la sento',
              status: 'received',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
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
              status: 'sent',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Non ancora',
              status: 'received',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
            },
            {
              date: '10/01/2020 15:51:00',
              text: 'Nessuna nuova, buona nuova',
              status: 'sent',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
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
              status: 'sent',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
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
              status: 'received',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
            },
            {
              date: '10/01/2020 15:51:00',
              text: 'OK!!',
              status: 'received',
              // variabile per vedere se l'utente sta cercando di selezionare un messaggio
              upHere: false
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
        status: 'sent',
        // variabile per vedere se l'utente sta cercando di selezionare un messaggio
        upHere: false
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
            status: 'received',
            // variabile per vedere se l'utente sta cercando di selezionare un messaggio
            upHere: false
          });
          this.userAnswer = false;
        }, 1000);
      }
    },

    // trova un contatto
    findContact() {
      // resetto la visibilità per ogni eventuale nuova ricerca
      for (contact of this.contacts) {
        contact.visible = true;
        console.log(this.contact);
      };

      if (this.currentSearch.length != 0) {
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

        // confronto ogni nuovo contatto con la mia ricerca 
        for (let y = 0; y < newContacts.length; y++) {

          if (this.currentSearch != newContacts[y]) {
            this.contacts[y].visible = false;
          };
        };
      };

    },

    showMe(index) {
      if (index)
        this.upHere = true;
    },

    dontShowMe(index) {
      this.upHere = false;
    }
  }
}).mount('#app')