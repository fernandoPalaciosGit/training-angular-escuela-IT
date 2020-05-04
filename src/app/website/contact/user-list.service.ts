import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map, mergeAll, mergeMap, tap, toArray } from 'rxjs/operators';

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

  isBannedUser(name: string): Observable<boolean> {
    return this.getBannedUsers().pipe(
      mergeAll(),
      filter((banned: string) => name.toLowerCase().indexOf(banned.toLowerCase()) !== -1),
      map((banned: string) => !!banned)
    );
  }
}
