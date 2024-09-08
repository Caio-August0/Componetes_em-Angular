import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardRoxoComponent } from './card-roxo/card-roxo.component';



@NgModule({
  declarations: [ 
    CardComponent,
    CardRoxoComponent],
  imports: [
    CommonModule
  ],
  exports: [ 
    CardComponent,
    CardRoxoComponent],
})
export class CardsModule { }
