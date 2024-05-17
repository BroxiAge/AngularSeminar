import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpareListComponent } from './spare-list/spare-list.component';
import { FormsModule } from '@angular/forms';
import { SpareAboutComponent } from './spare-about/spare-about.component';
import { SparesComponent } from './spares/spares.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    SpareListComponent,
    SpareAboutComponent,
    SparesComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
