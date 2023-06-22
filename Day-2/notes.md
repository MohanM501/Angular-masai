- For default tsconfig;
 tsc --init
- For customized tsconfig;
 tsc --init --target es3 --module ESNext

//https://www.typescriptlang.org/docs/handbook/compiler-options.html

- Ctrl+Space -> To show the recommended list in the tsconfige.com
-  "rootDir": "./src",  
- "outDir": "./script",

- To compile all files of ts to a one main.js ; we have to use module as AMD or System and instaed of "outDir" we have to use "outFile":main.js;

- To run or compile the code from ts to js; 
  tsc -w     (here w means watch)


-  TypeScript
   * Types/generics
   * Function
   * Interface
   * Classes
   * Modules
   * NameSpaces
   * Decorators

   (":" => post colon)
   # string type;

   let message:string="my name"; // it has to be a string only

   # Intersection
   Intersection Types (&):

    Intersection types allow you to combine multiple types into a single type that includes all the properties and methods of the individual types.
    
    You can create an intersection type using the & operator.

    An object of an intersection type must satisfy the requirements of all the individual types.

    For example:
   typescript
   Copy code

type Person = {
  name: string;
  age: number;
};

type Employee = {
  companyId: string;
  position: string;
};

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  name: 'John',
  age: 30,
  companyId: 'ABC123',
  position: 'Manager',
};

   # union
   
   let messa:(string | number)="jh"; // It can be either string or number
   messa=4;

   # any (don't use);

   let mess:any="jslsj" // You can use any datatypes if you use any;


// Math.random() -> gives random number between 0 to 1 (including decimal);
// Math.random() *3  -> give random number between 0 to 3 (including decimal);
// Math.round(Math.random()*3) -> gives random number between 0 to 3 (excluding decimal)(i.e either 1 or 3 or 2)

   # Array

   // Normal way;
   let arr:string[]=["mohsn","hd"];

   // generic way
   let arr2:Array<string>=["mfoh","hfs"];

   both ways are same; you can use any of those; no difference;
 
 # Enums (enumarators)
  Array with index numbers;

  enum Power{weak,recovering,strong} // weak=0; recovering=1; strong=2;
  enum Power{weak=1,recovering,strong} // weak=1; recovering=2; strong=3;
  enum Power{weak=5,recovering,strong} // weak=5; recovering=6; strong=7;

  let heroPower:Power=Power.recovering; console.log(heroPower) -> 6 is the output as per the previous line;

  let powerString=Power[heroPower]; console.log(powerString) -> recovering

  # null vs undefined 

  * null -> is developer assigned; if you want to assign value at later point of time that time developer can use null;
  * undefined -> is system assigned;(impplicitly assigned); If you don't assign system or framework assigns;


  # Function
  function adder (num1:number,num2:number):string{
    return num1+num2+"";
  }
 // return should be a string ;
 console.log(adder(4,6))
 
 // It is not returing anything
  function sub(num1:number,num2:number):void{
      console.log(num1,num2);
  }


  # Decorators
  (Higher order components) :- for resuability with almost same logic with few changes
    
    It can decorate a class,or a method, or property and it gives us a conveniant way of assigning a property onto it.


 




