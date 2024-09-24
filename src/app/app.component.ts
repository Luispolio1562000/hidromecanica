import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { FloatLabelModule } from 'primeng/floatlabel';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarModule, CommonModule, FormsModule, CascadeSelectModule, FloatLabelModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hidromecanica';
 value: String = 'User name'
}
