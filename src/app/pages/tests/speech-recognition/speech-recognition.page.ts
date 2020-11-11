import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.page.html',
  styleUrls: ['./speech-recognition.page.scss'],
})
export class SpeechRecognitionPage implements OnInit {
  matches: string[];
  isRecording = false;

  constructor(
    public navCtrl: NavController, 
    private speechRecognition: SpeechRecognition, 
    private plt: Platform, private cd: ChangeDetectorRef,
    private router : Router
    )
    {
    }

  ngOnInit(){
    this.getPermission();
  }

  isIos() {
    return this.plt.is('ios');
  }

  stopListening() {
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
  }
  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }

  startListening() {
    let options = {
      language: 'en-US'
    };

    this.speechRecognition.startListening().subscribe(matches => {
      this.matches = matches;
      this.cd.detectChanges();
    });
    this.isRecording = true;
  }

  acessarHome(){
    this.router.navigate(['/home']);
  }
}
