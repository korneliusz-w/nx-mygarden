import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GroupsEntity } from '@nx-mygarden/state-groups';

@Injectable()
export class DataAccessGroupServiceService {

  constructor(private readonly http: HttpClient) {}

  getGroups(): Observable<GroupsEntity[]> {
    return this.http.get<GroupsEntity[]>('http://localhost:3000/groups');
  }

  addGroup(group: GroupsEntity): Observable<GroupsEntity> {
    return this.http.post<GroupsEntity>('http://localhost:3000/groups', group);
  }

  deteleGroup(id: number | null): Observable<number> {
    return this.http.delete<GroupsEntity>('http://localhost:3000/groups/' + id).pipe(
      map(() => id as number)
    );
  }
}
