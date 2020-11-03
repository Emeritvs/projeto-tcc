import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ReadService } from 'src/app/services/read.service';
const comicsJSON = require('../../mockups/books.json');

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})

export class ComicsComponent implements OnInit {
  // private comics : any[] = comicsJSON;
  private comics : any[] = [];
  constructor(
    private modal : ModalService,
    private read : ReadService
  ) { }

  ngOnInit() {
    this.loadComics();
  }

  viewBook(data : any){
    this.modal.modalOpen('booksContent', data);
  }

  async loadComics(){
    await this.read.getComics().then(data => {
      console.log(data);

      for (let i = 0; i < data.length; i++) {
        let alreadyExists = this.comics.some(comic => comic.id === data.id);
        !alreadyExists ? this.comics.push(data[i]) : console.log(`Comic já adicionado a lista!`);
      }
    });
  }

}
