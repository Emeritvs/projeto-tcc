import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { WebcamComponent } from 'ngx-webcam';
import { WebcamInitError } from 'ngx-webcam/src/app/modules/webcam/domain/webcam-init-error';
import { Base64EncodedImage } from './base64-encoded-image';
import * as faceapi from 'face-api.js';
import * as canvas from 'canvas';
// import '@tensorflow/tfjs-node';


@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
})

export class TestsPage implements OnInit {

  @ViewChild('videoPlayer') videoplayer : HTMLVideoElement;
  @ViewChild('teste') tested : any;
  @HostListener('play') onMouseEnter() {
    console.log("TESTE")
  }

  constructor(
    private renderer: Renderer2,
    private elementRef:ElementRef
  ) { 
  }

  async ngOnInit() {
    Promise.all([
      await faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
      await faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
      await faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
      await faceapi.nets.faceExpressionNet.loadFromUri('./models')
    ]).then(() => {
      this.startVideo();
    })
  }

  async startCanvas(){
    // const canvas = faceapi.createCanvasFromMedia(this.videoplayer);
    
    setInterval(async () => {
      const detections = await faceapi.detectAllFaces(this.videoplayer, 
        new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
        console.log(detections);
    }, 100)
  }

  startVideo(){
    navigator.getUserMedia(
      { video: {} },
      stream => {
        this.videoplayer.srcObject = stream;
      },
      err => console.error(err)
    );

  }

  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("Camera access was not allowed by user!");
    }
  }
  
  // async faceApi():Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     faceapi.nets.tinyFaceDetector.loadFromUri('../../../models');
  //     faceapi.nets.faceLandmark68Net.loadFromUri('../../../models');
  //     faceapi.nets.faceRecognitionNet.loadFromUri('../../../models');
  //     faceapi.nets.faceExpressionNet.loadFromUri('../../../models')
  //   }).then(() => {
  //     this.startVideo();
  //   })
  // }

  // selectFile(event: any) {
  //   const file = event.target.files.item(0);
  //   const reader = new FileReader();
  //   reader.onload = (e: any) => this.imageSrc = e.target.result;
  //   reader.readAsDataURL(file);
  // }


}
