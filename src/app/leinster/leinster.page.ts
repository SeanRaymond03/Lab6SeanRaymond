import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// Leinster page component - displays flag and button to go to counties
@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class LeinsterPage {
  // Inject router to allow navigation
  constructor(private router: Router) {}

  // Navigate to the Leinster Counties page
  goToCounties() {
    this.router.navigate(['/leinster-counties']);
  }
}