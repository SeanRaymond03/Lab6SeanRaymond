import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

// Munster page component - displays the Munster flag
@Component({
  selector: 'app-munster',
  templateUrl: './munster.page.html',
  styleUrls: ['./munster.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class MunsterPage {}