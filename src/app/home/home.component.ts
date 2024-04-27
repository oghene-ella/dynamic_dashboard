import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Users } from '../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.userService.getUsers("https://reqres.in/api/users", {page: 0, per_page: 5}).subscribe((users: Users) => {
      console.log(users.data);
    })
  }
}
