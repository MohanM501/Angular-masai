import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondComp } from './second.component';

@NgModule({
  /* Declaration is list of all components,pipes,directives you can use in your application (This is like registering the componets) */
  declarations: [
    AppComponent,
    SecondComp
  ],
  /* Imports is list of all the modules you are using in the application */
  imports: [
    BrowserModule
  ],
  /* Providers are list of all the services that are injected(provided) to your application (like hoc, it is available for all the components ,(react api)) */
  providers: [],
  /* bootstrap is a list of main components of your application  */
  bootstrap: [AppComponent]
})
export class AppModule { }
