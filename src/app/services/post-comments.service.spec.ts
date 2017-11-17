import { TestBed, inject } from '@angular/core/testing';

import { PostCommentsService } from './post-comments.service';

describe('PostCommentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostCommentsService]
    });
  });

  it('should be created', inject([PostCommentsService], (service: PostCommentsService) => {
    expect(service).toBeTruthy();
  }));
});
