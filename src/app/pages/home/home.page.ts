import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BooksComponent } from 'src/app/components/books/books.component';
import { Teladimanica } from 'src/app/interfaces/process/teladinamica';
import { ComponentsRenderService } from 'src/app/services/components-render.service';
import { EmitterEventService } from 'src/app/services/emitter-event.service';
import { ProccessService } from 'src/app/services/proccess.service';
import { ThemeService } from 'src/app/services/theme.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('leftContainer', {  read: ViewContainerRef, static: true })  public esquerdo : ViewContainerRef;
  @ViewChild('rightContainer', {  read: ViewContainerRef, static: true })  public direito : ViewContainerRef;

  private themeActive : string;
  private activeTab : string = "Livros";

  constructor(
    private theme : ThemeService,
    private components : ComponentsRenderService,
    private resolver: ComponentFactoryResolver,
    private toaster : ToasterService,
    private emitter : EmitterEventService
  ) { 
    let active = localStorage.getItem('theme');
  }

  
  async ngOnInit() {
    if (this.emitter.subsVar == undefined) {    
      this.emitter.subsVar = this.emitter.invokeFirstComponentFunction
      .subscribe((param : any) => {  
        let data = param.data;

        //ABRIR COMPONENTE
        this.abrirComponente(this.direito, 'D',param.function ,data)
        .catch(err => {
          console.log(err);
          this.toaster.presentToast('Houve um problema ao processar sua solicitação. Tente novamente mais tarde', 'danger',  0);
        })
      });    
    }

    await this.abrirComponente(this.esquerdo, 'E','menuComponent',{});
    await this.abrirComponente(this.direito, 'D','booksComponent',{});
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    let active = ev.detail.value;

    switch (active) {
      case "livros":
        this.abrirComponente(this.direito, 'D', 'booksComponent', {});
        break;
      case "comics":
        this.abrirComponente(this.direito, 'D', 'comicsComponent', {});
        break;  
      case "documentos":
        this.abrirComponente(this.direito, 'D', 'documentsComponent', {});
        break;     
      case "menu":
        this.abrirComponente(this.esquerdo, 'E', 'menuComponent', {});
        break;  
      default:
        break;
    }

    this.activeTab = active;
  }

  async abrirComponente(element : ViewContainerRef, container:string,componentName:string,data?:any): Promise<Boolean> {
    return new Promise((resolve, reject) => {
          //DEU CERTO O CARREGAMENTO
          this.toaster.presentLoading('Carregando...')
          .then(async res => {
            res.present();
            try
            {
              let comp : any = await this.components.resolveComponentsName(componentName);
        
              if(comp != false)
              {
                let newItem = new ProccessService(comp, data);
                const factory = this.resolver.resolveComponentFactory(newItem.component);

                //Criar o componente 
                if(container == 'D')
                {
                  element.clear();
                  console.log('Carregando container D')
                  // let componentRef = this.direito.createComponent(factory);
                  this.direito.createComponent(factory);
                }
                else if(container == 'E')
                {
                  console.log('Carregando container esquerdo');
                  element.clear();
                  // let componentRef = this.esquerdo.createComponent(factory);
                  this.esquerdo.createComponent(factory);
                  // (<Teladimanica>componentRef.instance).data = newItem.desc;
                }
                else
                {
                  console.log('Não existe um container ativo ('+container+')   ');
                }

                res.dismiss();
                resolve(true)
              }
              else
              {
                alert('Falha ao carregar '+componentName);
                console.log('Componente nào esta instanciado');
                reject(false);
              }
            }
            catch(err)
            {
              reject(false)
              console.log(err);
              res.dismiss();
              this.toaster.presentToast(
                'Falha ao carregar tela',
                'danger',
                4000
              )
            }
          })
          .catch(err => {})
          .finally(()=> {})
    });
  }
}
