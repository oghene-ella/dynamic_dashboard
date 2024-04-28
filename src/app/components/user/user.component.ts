import { Component, Input } from '@angular/core';
import { User } from '../../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User;

  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate(['/users', this.user.id]);
  }
}
