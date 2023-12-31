// Component Decorator

let Component=function(config:any){
    return function(targetClass:any){
        let tc=new targetClass();
        return class{
            title:string=tc.title;
            power:number=config.power;
            selector:string=config.selector;
            template:string=config.template;
        }
    }
}

// Configue Decorator
@Component({
    power:100,
    selector :"app-root",
    template :`
        <div>
            <h2>{{title}}</h2>
            <ul>
                <li>List Item -1</li>
                <li>List Item -2</li>
                <li>List Item -3</li>
            </ul>
            <h3>The power is {{power}}</h3>
        </div>
    `

})
// Passing the Class
class MyComp{
    title:string="mohan title"
}