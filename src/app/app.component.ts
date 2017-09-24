import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})

export class AppComponent {

  constructor(private router: Router) {
    router.events
      .subscribe((event: NavigationEnd) => {
        window.scroll(0, 0);
      });
  }
}
