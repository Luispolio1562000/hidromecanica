import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hidromecanica';
date: any;
}
