import { Component, OnInit } from '@angular/core';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
@Component({
  selector: 'app-preview-camera',
  templateUrl: './preview-camera.page.html',
  styleUrls: ['./preview-camera.page.scss'],
})
export class PreviewCameraPage implements OnInit {

  smallPreview: boolean;
  IMAGE_PATH: any;
  colorEffect = 'none';
  setZoom = 1;
  flashMode = 'off';
  isToBack = false;

  constructor(private cameraPreview: CameraPreview) { }

  ngOnInit() {
  }

  startCameraAbove() {
    this.isToBack = false;
    this.cameraPreview.startCamera({x: 80, y: 450, width: 250, height: 300, toBack: false, previewDrag: true, tapPhoto: true});
  }

  stopCamera() {
    this.cameraPreview.stopCamera();
  }



}
