'use strict';

class Man {
    constructor(){
        this.name = 'imie';
        this.surname = 'nazwisko';
        this.weight = 'waga';
        this.height = 'wzrost';
        this.eyeColor = 'kolor oczu';
        this.age = 'wiek';

        }
        display(name, surname, weight, height, eyeColor, age){
            console.log(`Hello my name is ${name} ${surname} nice to meet you`);
            console.log(`Here are my ID details: ${weight} ${height} ${eyeColor} ${age}`);
        }
        eat(){
            console.log('Hungry?');
        }
    }

class Programmer extends Man {

    constructor(){
        super();
        this.lang ='java';
    }

    programmingLanguage(){
        console.log(`I work as Junior FrontDeweloper, programing language ${this.lang}`)
    }

    display(){
        this.programmingLanguage();
        super.display('adam', 'kowal', '', '', '', '');
    }
}

let junior = new Programmer();

junior.display();  
junior.eat();