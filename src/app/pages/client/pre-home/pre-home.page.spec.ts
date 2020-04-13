import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreHomePage } from './pre-home.page';

describe('PreHomePage', () => {
  let component: PreHomePage;
  let fixture: ComponentFixture<PreHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
