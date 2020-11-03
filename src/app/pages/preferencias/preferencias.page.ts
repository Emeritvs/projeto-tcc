import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ThemeComponent } from 'src/app/components/theme/theme.component';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-preferencias',
  templateUrl: './preferencias.page.html',
  styleUrls: ['./preferencias.page.scss'],
})
export class PreferenciasPage implements OnInit {

  @ViewChild("activeItem", { read: ViewContainerRef, static: true}) private container : ViewContainerRef;

  private themeActive : string;
  private darkChecked : boolean = false;

  constructor(
    private theme : ThemeService,
    private resolver: ComponentFactoryResolver,
    private modal : ModalController,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.themeActive = localStorage.getItem("theme") || "light";

    if (this.themeActive == "dark") {
      this.darkChecked = true;
    }
  }

  darkMode(event : any){
    const checked = event.detail.checked;

      if (checked) {
        // localStorage.setItem('theme', 'light');
        this.themeActive = "dark";
        this.theme.enableDark();
      }
      else {
        this.themeActive = "light";
        this.theme.enableLight();


      }

      console.log(this.themeActive);
      localStorage.setItem('theme', this.themeActive);
  }

  closeModal(){
    this.modal.dismiss();
  }
}
