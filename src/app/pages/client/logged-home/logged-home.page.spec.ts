import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoggedHomePage } from './logged-home.page';

describe('LoggedHomePage', () => {
  let component: LoggedHomePage;
  let fixture: ComponentFixture<LoggedHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoggedHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
