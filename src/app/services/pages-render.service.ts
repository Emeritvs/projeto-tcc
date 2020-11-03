import { Injectable } from '@angular/core';
import { BookContentPage } from '../modals/book-content/book-content.page';
import { PreferenciasPage } from '../pages/preferencias/preferencias.page';

@Injectable({
  providedIn: 'root'
})
export class PagesRenderService {

  constructor() { }

  async resolvePagesName(page : string) {
    if (page === 'bookContent') {
      return BookContentPage;
    }
    else if(page === 'preferenciasPage')
    {
      return PreferenciasPage;
    }
    else
    {
      alert('error')
      return false;
    }
  }
}
