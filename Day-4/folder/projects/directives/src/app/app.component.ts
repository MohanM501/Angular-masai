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
    
  `,
  styles: []
})
export class AppComponent {
  title = 'directives';
  show=true;
}
