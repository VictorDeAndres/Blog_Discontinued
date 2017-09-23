import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingNodeFirebaseComponent } from './hosting-node-firebase.component';

describe('HostingNodeFirebaseComponent', () => {
  let component: HostingNodeFirebaseComponent;
  let fixture: ComponentFixture<HostingNodeFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostingNodeFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingNodeFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
