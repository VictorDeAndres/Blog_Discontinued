import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWebcomponentsComponent } from './angular-webcomponents.component';

describe('AngularWebcomponentsComponent', () => {
  let component: AngularWebcomponentsComponent;
  let fixture: ComponentFixture<AngularWebcomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularWebcomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularWebcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
