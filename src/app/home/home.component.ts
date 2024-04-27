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

  onPageChange(pageEvent: PageEvent) {
    this.fetchUsers(pageEvent.pageIndex, pageEvent.pageSize)
    console.log(this.fetchUsers(pageEvent.pageIndex, pageEvent.pageSize))
  }

  ngOnInit() {
    this.fetchUsers(this.page, this.per_page)
    console.log(this.fetchUsers(this.page, this.per_page))
  }

  fetchUsers(page: number, per_page: number) {
    this.userService.getUsers("https://reqres.in/api/users", {page, per_page})
    .subscribe((users: Users) => {
      this.users = users.data
      this.totalRecords = users.total
    })
  }

}
