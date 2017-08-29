import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpackEnTusProyectosAngularComponent } from './webpack-en-tus-proyectos-angular.component';

describe('WebpackEnTusProyectosAngularComponent', () => {
  let component: WebpackEnTusProyectosAngularComponent;
  let fixture: ComponentFixture<WebpackEnTusProyectosAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpackEnTusProyectosAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebpackEnTusProyectosAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
