import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

// Connacht page component - displays the Connacht flag and counties list
@Component({
  selector: 'app-connacht',
  templateUrl: './connacht.page.html',
  styleUrls: ['./connacht.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ConnachtPage {}