import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpeechRecognitionPage } from './speech-recognition.page';

describe('SpeechRecognitionPage', () => {
  let component: SpeechRecognitionPage;
  let fixture: ComponentFixture<SpeechRecognitionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechRecognitionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpeechRecognitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
