import { Component, OnInit } from '@angular/core';
import { EmitterEventService } from 'src/app/services/emitter-event.service';
import { ModalService } from 'src/app/services/modal.service';
import { PreferenciasPage } from 'src/app/pages/preferencias/preferencias.page';
import { PagesRenderService } from 'src/app/services/pages-render.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    private emitter: EmitterEventService,
    private modal : ModalService,
    private pages : PagesRenderService
  ) { }

  ngOnInit() {}

  functionExecute(functionName:string,params:any)
  {
    console.log('preparando '+functionName);
    const param = {
      function:functionName,
      data:params
    }
    console.log('Active Click');
    console.log(param)
    this.emitter.onFirstComponentButtonClick(param); 
  }

  async openModal(){
    await this.pages.resolvePagesName("preferenciasPage")
    .then((res : any) => this.modal.modalOpen(res, {}));
  }
}
