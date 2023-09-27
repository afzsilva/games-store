import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MenuBarComponent,
    HomeComponent,
    CardLabelComponent,
    CardPricingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
