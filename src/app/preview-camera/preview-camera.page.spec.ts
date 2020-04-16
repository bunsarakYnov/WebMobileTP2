import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreviewCameraPage } from './preview-camera.page';

describe('PreviewCameraPage', () => {
  let component: PreviewCameraPage;
  let fixture: ComponentFixture<PreviewCameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewCameraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewCameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
