import { Component } from '@angular/core';
import { NavComponent } from '../components/nav/nav.component';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [NavComponent, LogoComponent, InputTextModule, PasswordModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

}
