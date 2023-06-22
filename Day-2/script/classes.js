"use strict";
// Constructor
// super()
// Private Property
// Public Property
// Private Methods
// Public Methods
// Static Methods
// Static Property
// getter and setter (get and set)
class Hero {
    //----------------
    constructor(ntitile, nfirstname) {
        // Properties
        this.title = "Batman";
        this._firstname = "Mohan";
        this._lastname = "M";
        this.title = ntitile;
        this._firstname = nfirstname;
    }
    //----------------
    // Methods
    get firstname() {
        return this._firstname;
    }
    set firstname(nfirstname) {
        this._firstname = nfirstname;
    }
}
Hero.version = 1001;
let hero = new Hero("don", "mohan");
console.log(hero.title, "---hero title");
console.log(hero.firstname, "---firstname getterr");
// Another better way of doing the same thing above;
// Super Class;
class Person {
    constructor(canwalk) {
        this.canwalk = canwalk;
    }
}
class Hero2 extends Person {
    //----------------
    constructor(title, _firstname, ncw) {
        super(ncw);
        this.title = title;
        this._firstname = _firstname;
    }
    //----------------
    // Methods
    get firstname() {
        return this._firstname;
    }
    set firstname(nfirstname) {
        this._firstname = nfirstname;
    }
    fullName() {
        return this._firstname + "2?" + this.title;
    }
}
// Properties
Hero2.version = 1001;
let hero2 = new Hero2("don2", "mohan2", "I can fly");
console.log(hero2.title, "---hero2 title");
console.log(hero2.firstname, "---firstname2 getterr");
