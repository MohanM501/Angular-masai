import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div >
      <h1>
         directives in angular
      </h1>
     
    </div>
    <h2>*ngFor directive </h2>
    <div>
      <p *ngFor="let hero of avengers; index as idx; first as fst; last as lst; odd as od; even as ev">
      {{idx+1}} ~ 
          <span *ngIf="fst"> First Avengers: </span>
          <span *ngIf="lst"> Last Avengers: </span>
          <span *ngIf="!fst && !lst">In between Avengers: </span>
          <span *ngIf="od">Odd Number:-</span>
          <span *ngIf="ev">Even Number:- </span>
      {{hero}}
      
      </p>
    </div>
    <p>ngFor (ng-template) (no element loop on single line)</p>
   <ng-template ngFor let-hero [ngForOf]="avengers">
      {{hero}}
   </ng-template>
   <h2>*ngSwitch directive </h2>
   <input #rng type="range" min="0" max="4" [value]="4" (input)="rateing=rng.value"/>{{rateing}}
   <p>Rating</p>
   <div [ngSwitch]="rateing">
      <h3 *ngSwitchCase="1" class="rateing" >*</h3>
      <h3 *ngSwitchCase="2" class="rateing" >**</h3>
      <h3 *ngSwitchCase="3" class="rateing" >***</h3>
      <h3 *ngSwitchCase="4" class="rateing" >****</h3>
      <h3 *ngSwitchCase="5" class="rateing" >*****</h3>
      <h3 *ngSwitchDefault class="rateing"> Not rated </h3>
   </div>
   <h4>Ng NonBindable </h4>
   <p ngNonBindable>{{hi}}</p>

   <h4>Ng Style Directive </h4>
   <p [style]="styleprop">style prop</p>
    <h4 [ngStyle]="{'bgcolor':bgCol2,'color':'darkblue'}">show color based on condition</h4>
   <h4 [ngStyle]="{'background-color':rateing<2 ? 'yellow':'red'}"> Rating Power </h4>
   <h4>Ng Class (preffered than ngStye)</h4>
   <p [ngClass]="{redBox:rateing>1,blueBox:rateing>3}">Ng clllass</p>
   `,
   styles:[`
     .rateing{
        margin:0px;
        font-family:arial;
        color:goldenrod;
     }
     
     .blueBox{
      width:20px;
       background-color:blue;
     }
     .redBox{
       width:20px;
       background-color:red;
     }
   `]
  
})
export class AppComponent {
  title = 'step-1-directives';
  avengers=["batman","superman","antman","Thor","GreenMan"];
  rateing:any=4;
  styleprop="border:2px solid red";
  bgCol2="blue";
}
