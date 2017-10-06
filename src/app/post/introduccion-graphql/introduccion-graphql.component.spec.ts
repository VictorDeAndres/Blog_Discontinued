import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionGraphqlComponent } from './introduccion-graphql.component';

describe('IntroduccionGraphqlComponent', () => {
  let component: IntroduccionGraphqlComponent;
  let fixture: ComponentFixture<IntroduccionGraphqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroduccionGraphqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduccionGraphqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
