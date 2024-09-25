import { Component } from '@angular/core';
import { LogoComponent } from "../../../shared/components/logo/logo.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
