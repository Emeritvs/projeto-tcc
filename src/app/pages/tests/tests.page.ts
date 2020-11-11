import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { WebcamComponent } from 'ngx-webcam';
import { WebcamInitError } from 'ngx-webcam/src/app/modules/webcam/domain/webcam-init-error';
import { Base64EncodedImage } from './base64-encoded-image';
import * as faceapi from 'face-api.js';
import * as canvas from 'canvas';
import { DOCUMENT } from '@angular/common';
// import '@tensorflow/tfjs-node';


@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
})

export class TestsPage implements OnInit {

  @ViewChild('videoPlayer') videoplayer : any;
  @ViewChild('oi') teste : any;

  public webcamEl : any;
  public videoEl: any;
  public canvas: any
  private count : number = 0;

  constructor(
    private renderer: Renderer2,
    private elementRef:ElementRef,
    @Inject(DOCUMENT) private document
  ) { 
  }

  ngOnInit(){

  }

  async ngAfterViewInit() {
    this.webcamEl = this.videoplayer.nativeElement;
    this.canvas = this.teste.nativeElement;
    this.startVideo();
  }

  async startCanvas(){
    let tempCount = 0;
    setInterval(async () => {
      const detections = await faceapi
      .detectSingleFace(this.webcamEl, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();
    }, 100)
  }

  async startVideo(){

    await faceapi.nets.tinyFaceDetector.loadFromUri('assets/models/');
    await faceapi.nets.faceLandmark68Net.loadFromUri('assets/models/');
    await faceapi.nets.faceRecognitionNet.loadFromUri('assets/models/');
    await faceapi.nets.faceExpressionNet.loadFromUri('assets/models/');

    const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    this.webcamEl.srcObject = stream;

    this.webcamEl.addEventListener('play', () => {

      const displaySize = { width: this.webcamEl.width, height: this.webcamEl.height };

      faceapi.matchDimensions(this.canvas, displaySize);
      setInterval(async () => {
        const detections = await faceapi
        .detectSingleFace(this.webcamEl, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks()
        .withFaceExpressions();

        if (detections != undefined) {
          console.log(detections);
          const resizedDetections = faceapi.resizeResults(detections, displaySize);
          this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
          faceapi.draw.drawFaceLandmarks(this.canvas, resizedDetections)
          faceapi.draw.drawFaceExpressions(this.canvas, resizedDetections);
          faceapi.draw.drawDetections(this.canvas, resizedDetections);
        }

      }, 100)
    });
  }

}
