/*

// let addPower=function(power:number){
//     return function (hero:any){
//         return{
//             title:hero.title,
//             power:power
//         }
//     }
// }

// let commonman={
//     title:"Batman",

// }

// // let tempCommonman=addPower(7);
// // commonman=tempCommonman(commonman);

// commonman=addPower(7)(commonman)

// console.log(commonman,"commonman")

*/

let AddPower=function (power:number){
    return function(targetClass:any){
        return class{
            title:string= new targetClass().title;
            power:number=power
        }
    }
}

@AddPower(7)
class CommonMan{
    title:string="batman"
}

// console.log(new CommonMan().power)
console.log(new CommonMan());



