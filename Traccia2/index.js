// Crea un oggetto rubrica formato da una proprietà contacts, cioè un array di contatti dove ogni contatto presenta un nome ed un numero di telefono, e da metodi (operazioni CRUD) quali:

// create: per aggiungere un nuovo contatto

// read all: per mostrare tutti i contatti presenti in rubrica oppure per mostrare tutti i contatti filtrandoli per nome del contatto (potrebbero esserci più contatti con lo stesso nome!)

// read by phone number: mostrare un singolo contatto presente in rubrica (ricerca tramite numero di telefono del contatto)

// update: modificare un contatto esistente (modifica del numero di telefono conoscendo il nome del contatto)

// delete: rimozione del contatto

// Tip: Per la rimozione del contatto, ricordate i metodi degli array findIndex() e splice()?


//Creo oggetto RUBRICA
let phoneBook = {

    //Array con i contatti
    contacts: [],

    //CREATE -> metodo che crea il contatto
    create(name, phoneNumber) {
        let contact = {
            name : name,
            phoneNumber : phoneNumber
        };

        this.contacts.push(contact);
        // console.log(`Contatto creato: ${name} - ${phoneNumber}`);
    },

    //READALL --> mostra tutta la rubrica o filtra per nome
    readAll(searchedName = null) {

        if (searchedName){
            console.log(`Contatti di nome ${searchedName}:`);
            // Filtro contatti
            let filteredContacts = this.contacts.filter((contact) => {
                return contact.name.includes(searchedName)
            });

            // Stampa i contatti filtrati
            filteredContacts.forEach(contact => {
                console.log(`${contact.name} - ${contact.phoneNumber}`);
            });

        } else {
            //Stampa tutta la rubrica se non ho filtri
            console.log("Contatti nella rubrica:");
            this.contacts.forEach(contact => {
            console.log(`${contact.name} - ${contact.phoneNumber}`);
            });
        }
    },

    //READ BY PHONE NUMBER --> Stampa contatto con quel numero di telefono
    readByPhoneNumber(searchedNumber) {

        console.log(`Cerco contatto con numero ${searchedNumber}`);

        // Cerca il contatto tramite il numero di telefono
        let foundContact = this.contacts.find((contact) => {
            return contact.phoneNumber == searchedNumber
        });

        if (foundContact) {
            console.log(`Contatto trovato: ${foundContact.name} - ${foundContact.phoneNumber}`);
        } else {
            console.log("Contatto non trovato.");
        }
    },

};

//Creazione contatti
phoneBook.create('Mario Merola', '3881078912');
phoneBook.create('Gianni Celeste', '3496367398');
phoneBook.create('Gigi DAlessio', '3332021181');
phoneBook.create('Mario Rossi', '3242628989');
phoneBook.create('Mario Bros', '3894044422');
phoneBook.create('Gianni BlaBlaBla', '239582398');
phoneBook.create('Gianni Morandi', '325811239853');



//Stampo i contatti
console.log(phoneBook.contacts);
phoneBook.readAll();

//Stampo i contatti con il filter 'Mario'
phoneBook.readAll('Mario');

// Stampa il contatto con il numero '325811239853'
phoneBook.readByPhoneNumber('325811239853');