import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalService } from 'src/app/services/modal.service';
const booksJSON = require('../../mockups/books.json');

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  private books : any[] = booksJSON;

  constructor(
    private content : ModalService
  ) { 

  }

  ngOnInit() {

  }

  ViewContent(data : any){
    this.content.ViewInfo(data);
  }

}
