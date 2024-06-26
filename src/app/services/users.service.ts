import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pagination, User, Users } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiService: ApiService,private http: HttpClient) { }

  getUsers = (url: string, params: Pagination): Observable<Users> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  }
  // searchUsers(id: string) {
  //   return this.http.get<any[]>(`https://reqres.in//api/users/${id}`);
  // }
}
