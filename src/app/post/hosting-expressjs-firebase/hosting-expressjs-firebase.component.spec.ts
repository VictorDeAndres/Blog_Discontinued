import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingExpressJsFirebaseComponent } from './hosting-expressjs-firebase.component';

describe('HostingExpressJsFirebaseComponent', () => {
  let component: HostingExpressJsFirebaseComponent;
  let fixture: ComponentFixture<HostingExpressJsFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostingExpressJsFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingExpressJsFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
