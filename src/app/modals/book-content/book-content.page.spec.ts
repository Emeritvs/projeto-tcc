import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookContentPage } from './book-content.page';

describe('BookContentPage', () => {
  let component: BookContentPage;
  let fixture: ComponentFixture<BookContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
