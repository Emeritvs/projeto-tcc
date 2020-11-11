import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookContentPageRoutingModule } from './book-content-routing.module';

import { BookContentPage } from './book-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookContentPageRoutingModule
  ],
  declarations: [BookContentPage]
})
export class BookContentPageModule {}
