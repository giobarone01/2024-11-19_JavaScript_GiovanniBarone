// Crea un oggetto che rappresenta un utente con le seguenti caratteristiche:

// nome
// cognome
// eta'
// un metodo che permetta di salutare


//FULL NOTATION
let user = new Object();

user.firstname = 'Checco';
user.lastname = 'Zalone';
user.age = 45;

user.printData = function () {
    console.log(`Ciao ${user.firstname} ${user.lastname}, hai ${user.age} anni!`);
}

user.printData();


//SHORT NOTATION
let user2 = {
    firstname : 'Alessandro',
    lastname : 'Siani',
    age : 39,

    printData : function () {
        console.log(`Ciao ${user2.firstname} ${user2.lastname}, hai ${user2.age} anni!`);
    }

};

user2.printData();


//FUNZIONE GENERATRICE
function User(nome, cognome, età) {

    this.firstname = nome;
    this.lastname = cognome;
    this.age = età;

    this.printFullname = function() {
        console.log(`Ciao ${this.firstname} ${this.lastname}, hai ${this.age} anni!`);
    };

};

let user3 = new User('Cristian', 'De Sica', 57);
user3.printFullname();

let user4 = new User('Massimo', 'Boldi', 70);
user4.printFullname();
