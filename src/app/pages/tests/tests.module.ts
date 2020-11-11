import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TestsPageRoutingModule } from './tests-routing.module';
import { TestsPage } from './tests.page';
import {WebcamModule} from 'ngx-webcam';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestsPageRoutingModule,
    WebcamModule
  ],
  declarations: [TestsPage]
})
export class TestsPageModule {}
