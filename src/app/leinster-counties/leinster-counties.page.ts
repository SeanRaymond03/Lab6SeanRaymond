import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

// Leinster Counties page - displays a list of all counties using ngFor
@Component({
  selector: 'app-leinster-counties',
  templateUrl: './leinster-counties.page.html',
  styleUrls: ['./leinster-counties.page.scss'],
  standalone: true,
  // CommonModule is needed for ngFor to work
  imports: [IonicModule, CommonModule],
})
export class LeinsterCountiesPage {
  // Array of all 12 Leinster counties
  counties: string[] = [
    'Carlow', 'Dublin', 'Kildare', 'Kilkenny', 'Laois',
    'Longford', 'Louth', 'Meath', 'Offaly',
    'Westmeath', 'Wexford', 'Wicklow'
  ];
}