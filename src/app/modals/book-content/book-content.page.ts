import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.page.html',
  styleUrls: ['./book-content.page.scss'],
})
export class BookContentPage implements OnInit {

  @Input() data : any;

  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  closeModal(){
    this.modal.dismiss();
  }
}
