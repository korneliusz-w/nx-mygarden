import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '@nx-mygarden/shared';
import { Observable } from 'rxjs';

@Injectable()
export class DataAccessGroupServiceService {

  constructor(private readonly http: HttpClient) {}

  getGroups(): Observable<Group[]> {
    console.log('getGroups')
    return this.http.get<Group[]>('http://localhost:3000/groups');
  }

  deteleGroup(id: number): Observable<Group> {
    return this.http.delete<Group>('http://localhost:3000/groups/' + id);
  }
}
