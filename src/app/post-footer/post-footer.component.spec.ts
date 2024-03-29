import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFooterComponent } from './post-footer.component';

describe('PostFooterComponent', () => {
  let component: PostFooterComponent;
  let fixture: ComponentFixture<PostFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
