import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisJavascriptComponent } from './this-javascript.component';

describe('ThisJavascriptComponent', () => {
  let component: ThisJavascriptComponent;
  let fixture: ComponentFixture<ThisJavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisJavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
