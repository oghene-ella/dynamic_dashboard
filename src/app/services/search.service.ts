import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../types';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _users = new BehaviorSubject<User[]>([]);
  public users$ = this._users.asObservable();

  constructor(private http: HttpClient) { }

  getUsers(query: string): Observable<User[]> {
    return this.http.get<User[]>(`https://reqres.in/api/users?query=${query}`);
  }
  
}
