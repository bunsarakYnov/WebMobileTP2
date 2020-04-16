import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewCameraPageRoutingModule } from './preview-camera-routing.module';

import { PreviewCameraPage } from './preview-camera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewCameraPageRoutingModule
  ],
  declarations: [PreviewCameraPage]
})
export class PreviewCameraPageModule {}
