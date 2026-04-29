import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  // Inject the router to allow navigation between pages
  constructor(private router: Router) {}
// Navigate to the selected province page
  goTo(page: string) {
    this.router.navigate(['/' + page]);
  }
}
imports: [IonicModule],
})
