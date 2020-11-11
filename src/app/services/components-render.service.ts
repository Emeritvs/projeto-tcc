import { Injectable } from '@angular/core';
import { BooksComponent } from '../components/books/books.component';
import { ComicsComponent } from '../components/comics/comics.component';
import { DocumentsComponent } from '../components/documents/documents.component';
import { MenuComponent } from '../components/menu/menu.component';
import { ThemeComponent } from '../components/theme/theme.component';
import { BookContentPage } from '../modals/book-content/book-content.page';
import { PreferenciasPage } from '../pages/preferencias/preferencias.page';

@Injectable({
  providedIn: 'root'
})
export class ComponentsRenderService {

  constructor(
  ) 
  { 

  }

  async resolveComponentsName(componentName : any) {

    console.log('Resolvendo '+componentName)
    if (componentName === 'booksComponent') {
      return BooksComponent;
    }
    else if(componentName === 'comicsComponent')
    {
      return ComicsComponent;
    }
    else if(componentName === 'documentsComponent')
    {
      return DocumentsComponent;
    }
    else if(componentName === 'menuComponent')
    {
      return MenuComponent;
    }
    else if(componentName === 'themeComponent')
    {
      return ThemeComponent;
    }
    else
    {
      alert('error')
      return false;
    }
  }

  async resolveModalComponent(component : any){

  }
}
