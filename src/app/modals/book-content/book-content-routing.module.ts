import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookContentPage } from './book-content.page';

const routes: Routes = [
  {
    path: '',
    component: BookContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookContentPageRoutingModule {}
