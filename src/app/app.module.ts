import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardRoxoComponent } from './card-roxo/card-roxo.component';

@NgModule({
  declarations: [ // declaração dos componentes é aqui que referenciamos os componentes no modulos
    AppComponent,
    CardComponent,
    CardRoxoComponent
  ],
  imports: [ // definirmos os modulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
