import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BooksComponent } from './books/books.component';
import { ComicsComponent } from './comics/comics.component';
import { DocumentsComponent } from './documents/documents.component';
import { ItemInfoComponent } from './item-info/item-info.component';
import { MenuComponent } from './menu/menu.component';

const PAGES_COMPONENTS = [
    BooksComponent,
    ComicsComponent,
    DocumentsComponent,
    ItemInfoComponent,
    MenuComponent,
];

@NgModule({
    declarations: [
        PAGES_COMPONENTS
    ],
    exports: [
        PAGES_COMPONENTS
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    ]
})
export class ComponentsModule { }