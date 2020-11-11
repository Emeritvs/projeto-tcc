import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookContentPage } from '../modals/book-content/book-content.page';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private modal : ModalController,
  ) { }

  async modalOpen(page : any, props : any) {
    let modalPage = BookContentPage;
    const modal = await this.modal.create({
      component: page,
      mode: 'ios',
      showBackdrop: true,
      cssClass:'selector-modal',
      componentProps: {
        props
      }
    });
    await modal.present();
  }

  async ViewInfo(data : any){
    const modal = await this.modal.create({
      component: BookContentPage,
      mode: 'ios',
      showBackdrop: true,
      cssClass:'selector-modal',
      componentProps: {
        "data": data
      }
    });
    await modal.present();
  }

  closeModal(){
    this.modal.dismiss();
  }
}
