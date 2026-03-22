import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class LeinsterPage {
  constructor(private router: Router) {}

  goToCounties() {
    this.router.navigate(['/leinster-counties']);
  }
}