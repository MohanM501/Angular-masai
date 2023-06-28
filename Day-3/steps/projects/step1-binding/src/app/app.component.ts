import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Binding in Angular</h1>
    <h2>Title: {{title}}</h2>
    <h2>Length of Title(Interpolation): {{title.length}}</h2>
    
    <fieldset>
      <legend>
          <h3>Attibute Binding</h3>
      </legend>
      <h2 [innerHTML]="title"></h2>
      <h1 [innerText]="title"></h1>
      <h4 innerText="{{title}}"></h4>
    </fieldset>
    <fieldset>
      <legend>
          <h3>Property Binding (some browser won't support attributes that case)</h3>
      </legend>
      <h2 bind-innerHTML="title"></h2>
      <h1 bind-innerText="title"></h1>
      <h4 innerText="{{title}}"></h4>
    </fieldset>
    <fieldset>
      <legend>
          <h3>Value Binding </h3>
      </legend>
      <input type="text" [value]="title"/>
      <input [type]="type"/>
    </fieldset>
    <fieldset>
      <legend>
          <h3>Event Binding </h3>
      </legend>
      <input #ti type="text"/>
      <button (click)="clickHandler(ti.value)">Click Me</button>
      <hr>
      <legend>
          <h2>2-way binding</h2>
      </legend>
      <input #incount type="number" [value]="count" (input)="count=incount.value"/>
      <br/>
      <p>Same 2-way binding with help of forms</p>
      <input type="number" [(ngModel)]="count" />
      <h2>The count is :{{count}}</h2>
      
      
    </fieldset>
    
  
  </div>
  `
  
})
export class AppComponent {
  title = 'Welcome to life';
  type="range";
  count:any=5;
  clickHandler(message:string){
    alert(message)
  }
}
