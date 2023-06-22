// Constructor
    // super()
// Private Property
// Public Property

// Private Methods
// Public Methods

// Static Methods
// Static Property

// getter and setter (get and set)

class Hero{
    // Properties

    public title:string="Batman";
    private _firstname:string="Mohan";
    private _lastname:string="M";
    static version:number=1001;
    
    //----------------

    constructor(ntitile:string,nfirstname:string){
        this.title=ntitile;
        this._firstname=nfirstname;
    }

    //----------------

    // Methods
    get firstname(){
        return this._firstname
    }

    set firstname(nfirstname:string){
        this._firstname=nfirstname
    }
}

let hero=new Hero("don","mohan");

console.log(hero.title,"---hero title");
console.log(hero.firstname,"---firstname getterr")


// Another better way of doing the same thing above;

// Super Class;

class Person{
    
    constructor(public canwalk:string){
        
    }
}


// Interface
interface IHero2{
    // only public properties or methods
    title:string;
    fullName():string
}

class Hero2 extends Person implements IHero2{
    // Properties

     
     static version=1001;
    
    //----------------

    constructor(
        public title:string,
        private _firstname:string,
        ncw:string){
       super(ncw)
    }

    //----------------

    // Methods
    get firstname(){
        return this._firstname
    }

    set firstname(nfirstname:string){
        this._firstname=nfirstname
    }
    fullName(){
        return this._firstname+"2?"+this.title
    }
}

let hero2=new Hero2("don2","mohan2","I can fly");

console.log(hero2.title,"---hero2 title");
console.log(hero2.firstname,"---firstname2 getterr")
