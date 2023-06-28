import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComp } from './banner.component';
import { FooterComp } from './footer.component';
import { HeaderComp } from './header.component';
import { MainComp } from './main.component';
import { ProductComp } from './product.component';
import { TopbarComp } from './topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComp,
    FooterComp,
    HeaderComp,
    MainComp,
    ProductComp,
    TopbarComp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
