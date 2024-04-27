import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User, Users } from '../../types';
import { UserComponent } from '../components/user/user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private userService: UsersService
  ) {}

  users: User[] = [];

  ngOnInit() {
    this.userService.getUsers("https://reqres.in/api/users", {page: 0, per_page: 6}).subscribe((users: Users) => {
      console.log(users.data);
      this.users = users.data
    })
  }
}
