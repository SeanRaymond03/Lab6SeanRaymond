import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leinster-counties',
  templateUrl: './leinster-counties.page.html',
  styleUrls: ['./leinster-counties.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class LeinsterCountiesPage {
  counties: string[] = [
    'Carlow', 'Dublin', 'Kildare', 'Kilkenny', 'Laois',
    'Longford', 'Louth', 'Meath', 'Offaly',
    'Westmeath', 'Wexford', 'Wicklow'
  ];
}