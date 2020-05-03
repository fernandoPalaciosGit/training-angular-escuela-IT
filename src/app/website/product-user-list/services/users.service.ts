import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiUsers, Users } from '@product-user-list/models/users';

@Injectable()
export class UsersService {
  readonly API_USER = 'https://randomuser.me/api';

  constructor(private httpClient: HttpClient) {
  }

  private getURLByNumberUsers(numberUsers: number): string {
    return `${ this.API_USER }/?results=${ numberUsers }`;
  }

  getAllUsers(numberUsers: number): Observable<Users[]> {
    return this.httpClient.get<ApiUsers>(this.getURLByNumberUsers(numberUsers))
      .pipe(map((response: ApiUsers) => response.results));
  }
}
