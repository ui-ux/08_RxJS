import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { debounceTime, fromEvent, map, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-switch-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss',
})
export class SwitchMapComponent implements OnInit {
  searchResults: any[] = [];
  allUsers: any[] = [];

  ngOnInit(): void {
    const searchInput = document.getElementById(
      'search-input'
    ) as HTMLInputElement;

    fromEvent(searchInput, 'input')
      .pipe(
        debounceTime(300),
        map((event: any) => event.target.value),
        switchMap((searchTerm) =>
          ajax
            .getJSON<any[]>('https://jsonplaceholder.typicode.com/users')
            .pipe(
              map((users) =>
                users.filter((user) =>
                  user.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
              )
            )
        )
      )
      .subscribe((results) => {
        this.searchResults = results;
      });
  }

  // ngOnInit(): void {
  //   const searchInput = document.getElementById(
  //     'search-input'
  //   ) as HTMLInputElement;

  //   // Завантажуємо всіх користувачів один раз
  //   ajax
  //     .getJSON<any[]>('https://jsonplaceholder.typicode.com/users')
  //     .subscribe((users) => {
  //       this.allUsers = users;

  //       // Слухаємо введення
  //       fromEvent(searchInput, 'input')
  //         .pipe(
  //           debounceTime(300),
  //           map((event: any) => event.target.value.toLowerCase())
  //         )
  //         .subscribe((searchTerm) => {
  //           this.searchResults = this.allUsers.filter((user) =>
  //             user.name.toLowerCase().includes(searchTerm)
  //           );
  //         });
  //     });
  // }
}
