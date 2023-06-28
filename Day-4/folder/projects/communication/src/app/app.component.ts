import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div >
      <h1>Main Component</h1>
      <app-child [quantity]="count" (childEvent)="childEventListener($event)">
          <h3>Heading3</h3>
          <button>Click me </button>
          <p>
            Lorem!
          </p>
          <p class="box">
          select(filter by) by class
          </p>
          <h4 id="id-filter">Select(filter) by ID</h4>
         <div>{{title}}</div>
        <ul>
          <li>list1</li>
          <li>list2</li>
          <li>list3</li>
        </ul>
      </app-child>
      <button (click)="count=count+1">Increase Count {{count}}</button>
      <h5> Child Data (message):- {{childdata}}</h5>
    </div>
  `
  
})
export class AppComponent {
  title = 'My Application Title';
  count:number=0;
  childdata:any="";
  childEventListener(message:any){
    // alert("Child event triggerd ; this is from parent")
    alert(message);
    this.childdata=message;
  }
}
