import { Component, EventEmitter } from "@angular/core";


@Component({
    selector:"app-child",
    inputs:["quantity"],
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
        <h4>quanityt in child:{{quantity}}</h4>
    </div>

    `
})

export class ChildComp{
    title="Child";
    quantity:any=0;
    childEvent:EventEmitter <any>= new EventEmitter();
}