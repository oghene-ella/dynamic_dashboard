import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../../../types';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  searchControl = new FormControl();
  users$: Observable<User[]>;

  constructor(private searchService: SearchService) {
    this.users$ = this.searchControl.valueChanges.pipe(
      debounceTime(400),
      switchMap(query => this.searchService.getUsers(query))
    );
  }
}


