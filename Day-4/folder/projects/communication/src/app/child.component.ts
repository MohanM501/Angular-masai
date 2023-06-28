import { Component, EventEmitter, Output,Input } from "@angular/core";


@Component({
    selector:"app-child",
    /* inputs:["quantity"], This is not a good way of doing ; use decorate Input i.e @Input at bottom*/
    template:`
    <div style="border:2px solid red; padding:40px">
        <h2>Child Component in red border</h2>
        <ng-Content select="h3"></ng-Content>
        <hr>
        <ng-Content select="p.box"></ng-Content>
        <hr>
        <ng-Content select="#id-filter"></ng-Content>
        <hr>
        <ng-Content></ng-Content>
        <h4>quanityt in child:{{quantity*2}}</h4>
        <button (click)="clickHandler()">Click me child</button>
        <input #ti type="text"  />
        <button (click)="clickHandler2(ti.value)">Click me child for Input</button>
    </div>

    `
})

export class ChildComp{
    title="Child title";
    @Input() quantity:number=0;
    @Output() childEvent:EventEmitter <any>= new EventEmitter();
    clickHandler(){
        // console.log("Clicked handleer cliked");
        // alert("click handle triggerred");
        this.childEvent.emit(this.title);
    }
    clickHandler2(message:any){
            this.childEvent.emit(message);
    }
}