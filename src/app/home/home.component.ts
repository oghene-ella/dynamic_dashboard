import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User, Users } from '../../types';
import { UserComponent } from '../components/user/user.component';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserComponent, CommonModule, MatPaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private userService: UsersService
  ) {}

  users: User[] = [];
  totalRecords:number = 0
  per_page: number = 6
  page: number = 1
  total_page: number = 2

  onPageChange(event: any) {
    if (this.page == 1 && this.page <= this.total_page) {
      this.page = this.page + 1
      this.fetchUsers(this.page, this.per_page)
    }
    else if(this.page == this.total_page) {
      this.page = this.page - 1
      this.fetchUsers(this.page, this.per_page)
    }
  }

  ngOnInit() {
    this.fetchUsers(this.page, this.per_page);
  }
  

  fetchUsers(page: number, per_page: number) {
    this.userService.getUsers("https://reqres.in/api/users", {page, per_page})
    .subscribe((users: Users) => {
      this.users = users.data
      this.totalRecords = users.total
    })
  }

}
