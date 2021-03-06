import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

// tslint:disable-next-line:max-line-length
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string;
  imgData: string;

  watchStart: boolean;
  position = [];

  constructor(private alertController: AlertController, private camera: Camera, private geolocation: Geolocation, private localNotification: LocalNotifications, private cameraPreview: CameraPreview) {}

  updateTitle() {
    this.title = 'Mon Nouveau Titre';
  }

  /**
   * https://ionicframework.com/docs/api/alert
   */
  async fireAlert() {
    // creation de l alerte
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    // quand l alerte sera masquée
    alert.onDidDismiss().then(() => console.log('alerte masquée'))

    // affichage de l alerte
    await alert.present();
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      console.log(imageData);
      this.imgData = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  geo() {
      this.geolocation.getCurrentPosition().then((resp) => {
        /* this.position.push({
          latitude: resp.coords.latitude,
          longitude: resp.coords.longitude,
        }); */

      }).catch((error) => {
        console.log('Error getting location', error);
      });

      const watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
        this.watchStart = true;
        this.position.push({
          latitude: data.coords.latitude,
          longitude: data.coords.longitude
        });

      });
    }

  notification() {
    this.localNotification.schedule({
      id: 1,
      title: 'Ynov Informatique',
      text: 'Notification Web Mobile Ynov !',
      sound: null,
    });
  }

  preview() {

    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: 640,
      height: 480,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    }

    this.cameraPreview.startCamera(cameraPreviewOpts);
  }



}
