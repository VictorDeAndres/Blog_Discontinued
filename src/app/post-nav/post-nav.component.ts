import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-nav',
  templateUrl: './post-nav.component.html',
  styleUrls: ['./post-nav.component.scss'],
  providers: []
})
export class PostNavComponent {

  @Input()
    categories: object[];
  @Input()
    archives: object[];
  @Output()
    category: EventEmitter<string> = new EventEmitter<string>();
  @Output()
    archived: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  selectByCategory(selectCategory: string): void {
    this.category.emit(selectCategory);
  }

  selectByArchive(selectArchive: string): void {
    this.archived.emit(selectArchive);
  }

}
