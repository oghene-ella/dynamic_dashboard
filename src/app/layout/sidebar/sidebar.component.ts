import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed = false;

  menuItems = [
    { name: 'Home', icon: 'fas fa-home' },
    { name: 'Profile', icon: 'fas fa-user' },
    { name: 'Logout', icon: 'fas fa-sign-out-alt' }
  ];

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
