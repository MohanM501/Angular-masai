import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <label for="terms"> Show terms and Conditions</label>
    <input id="terms" type="checkbox" (change)="show=!show"/>
    <fieldset *ngIf="show">
      <legend>Terms and Conditions</legend>
      <p>1st Condition</p>
      <p>2nd Condition</p>
      <p>3rd Condition</p>
      <p>Lorem</p>
    </fieldset>
    
    <ng-template [ngIf]="!show" >{{title}}</ng-template>

    <hr>
    <ul>
        <li>{{avengers[0]}}</li>
    </ul>
    <ol>
        <li *ngFor="let hero of avengers">{{hero}}</li>
    </ol>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'directives';
  show=false;
  avengers=["Ironman","Spiderman","Thor","Lockie","Captain America","Hawkeye","Antman","Groot"]
}
