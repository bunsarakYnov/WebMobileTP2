import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewCameraPage } from './preview-camera.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewCameraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewCameraPageRoutingModule {}
