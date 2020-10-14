import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BooksComponent } from 'src/app/components/books/books.component';
import { Teladimanica } from 'src/app/interfaces/process/teladinamica';
import { ProccessService } from 'src/app/services/proccess.service';
import { ThemeService } from 'src/app/services/theme.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('leftContainer', {  read: ViewContainerRef, static: false })  public esquerdo : ViewContainerRef;
  @ViewChild('rightContainer', {  read: ViewContainerRef, static: false })  public direito : ViewContainerRef;

  private themeActive : string;

  constructor(
    private theme : ThemeService,
    private toaster : ToasterService,
    private resolver: ComponentFactoryResolver,
  ) { 
    let active = localStorage.getItem('theme');
    console.log(active);
    this.themeActive === active ? this.themeActive = this.themeActive : this.themeActive = active; 
  }

  
  ngOnInit() {
  }

  teste(){
    this.abrirComponente('D','booksComponent',{});
  }

  enableDark(){
    localStorage.setItem('theme', 'dark');
    this.themeActive = "dark";
    this.theme.enableDark();
  }

  enableLight(){
    localStorage.setItem('theme', 'light');
    this.themeActive = "light";
    this.theme.enableLight();
  }

  private resolveComponentsName(componentName : any) {

    console.log('Resolvendo '+componentName)
    if (componentName === 'booksComponent') {
      return BooksComponent;
    }
    // else if(componentName === 'compatendimentorelatoriooperaaco')
    // {
    //   return CompatendimentorelatoriooperaacoComponent
    // }
    else
    {
      alert('error')
      return false;
    }
  }

  abrirComponente(container:string,componentName:string,data?:any): Promise<Boolean> {
    return new Promise((resolve, reject) => {
          //DEU CERTO O CARREGAMENTO
          this.toaster.presentLoading('Carregando...')
          .then(res => {
            res.present();
            try
            {
              let comp : any = this.resolveComponentsName(componentName);
        
              if(comp != false)
              {
                console.log('Componente identificado '+componentName);
                let newItem = new ProccessService(comp, data);
                const factory = this.resolver.resolveComponentFactory(newItem.component);

                //Criar o componente 
                if(container == 'D')
                {
                  this.direito.clear();
                  console.log('Carregando container D')
                  let componentRef = this.direito.createComponent(factory);
                  (<Teladimanica>componentRef.instance).data = newItem.desc;
                }
                else if(container == 'E')
                {
                  console.log('Carregando container esquerdo');
                  this.esquerdo.clear();
                  let componentRef = this.esquerdo.createComponent(factory);
                  (<Teladimanica>componentRef.instance).data = newItem.desc;
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
