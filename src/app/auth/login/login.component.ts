import { Component } from '@angular/core';
import { NavComponent } from '../components/nav/nav.component';
import { LogoComponent } from "../../shared/components/logo/logo.component";
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavComponent, LogoComponent, InputTextModule, PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


}
