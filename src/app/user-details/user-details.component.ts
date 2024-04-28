import { Component, Input, OnInit } from '@angular/core';
import { UserDetails } from '../../types';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  userDetails!: UserDetails;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<UserDetails>(`https://reqres.in/api/users/${id}`).subscribe(details => {
      this.userDetails = details;
    });
  }

  goBack() {
    this.router.navigate(['']);
  }
}