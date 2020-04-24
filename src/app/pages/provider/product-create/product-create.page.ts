import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.page.html',
  styleUrls: ['./product-create.page.scss'],
})
export class ProductCreatePage implements OnInit {
  form: FormGroup;

  tempImages: string[] = [];

  constructor(private camera: Camera, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(),
      type: new FormControl(),
      price_bs: new FormControl(),
      price_us: new FormControl(),
      description: new FormControl(),
    });
  }

  camara() {
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA,
    };

    this.procesarImagen( options );
  }

  libreria() {
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };

    this.procesarImagen(options);
  }

  procesarImagen(options: CameraOptions) {
    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        const img = window.Ionic.WebView.convertFileSrc(imageData);
        console.log(img);

        this.tempImages.push(img);
      },
      (err) => {
        // Handle error
      }
    );
  }

  onFormSubmit() {
    // if (!this.form.valid) {
    //   return false;
    // } else {
    //   this.apiService.createUser(this.form.value).then(res => {
    //     this.form.reset();
    //     this.router.navigate(['/home']);
    //   })
    //     .catch(error => console.log(error));
    // }
  }
}
