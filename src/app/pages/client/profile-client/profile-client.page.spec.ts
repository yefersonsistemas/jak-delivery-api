import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileClientPage } from './profile-client.page';

describe('ProfileClientPage', () => {
  let component: ProfileClientPage;
  let fixture: ComponentFixture<ProfileClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
