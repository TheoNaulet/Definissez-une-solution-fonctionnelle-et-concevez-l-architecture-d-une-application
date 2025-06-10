// home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router, private userService: UserService) {}

  chooseRole(role: 'client' | 'support') {
    this.userService.role = role;
    this.userService.name = role === 'client' ? 'Client' : 'Support';
    this.router.navigate(['/chat']);
  }
}
