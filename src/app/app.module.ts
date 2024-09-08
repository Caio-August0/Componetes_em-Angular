import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';


@NgModule({
  declarations: [ // declaração dos componentes é aqui que referenciamos os componentes no modulos
    AppComponent
  ],
  imports: [ // definirmos os modulos
    BrowserModule,
    AppRoutingModule,
    CardsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
