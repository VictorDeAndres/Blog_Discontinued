import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidCincoPrincipiosBasicosComponent } from './solid-cinco-principios-basicos.component';

describe('SolidCincoPrincipiosBasicosComponent', () => {
  let component: SolidCincoPrincipiosBasicosComponent;
  let fixture: ComponentFixture<SolidCincoPrincipiosBasicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidCincoPrincipiosBasicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidCincoPrincipiosBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
