import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserListService {
  private readonly API = 'http://www.localhost:4000';
  private readonly RESOURCE = 'bannedUsers';

  constructor(
    private http: HttpClient
  ) {
  }

  private getBannedUserUrl(): string {
    return `${ this.API }/${ this.RESOURCE }`;
  }

  getBannedUsers(): Observable<string[]> {
    return this.http.get<string[]>(this.getBannedUserUrl());
  }
}
