import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, tap, map } from 'rxjs';
import * as GroupsActions from './groups.actions';
import { DataAccessGroupServiceService } from '@nx-mygarden/data-access-group';
import { GroupsEntity } from './groups.models';

@Injectable()
export class GroupsEffects {
  private actions$ = inject(Actions);

  private dataAccess$ = inject(DataAccessGroupServiceService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupsActions.loadGroups),
      switchMap(() => this.dataAccess$.getGroups()),
      switchMap((data) => of(GroupsActions.loadGroupsSuccess({ groups: data }))),
      catchError((error) => {
        return of(GroupsActions.loadGroupsFailure({ error }));
      })
    )
  );

  addGroup$ = createEffect(() => 
      this.actions$.pipe(
        ofType(GroupsActions.addNewGroup),
        switchMap((action) => this.dataAccess$.addGroup(action.group)),
        switchMap((data: GroupsEntity) => of(GroupsActions.addNewGroupSuccess({group: data}))),
        catchError((error) => {
          return of(GroupsActions.addNewGroupFailure({ error }));
        })        
      )
  );

  removeGroup$ = createEffect(() => 
      this.actions$.pipe(
        ofType(GroupsActions.removeGroup),
        switchMap((action) => this.dataAccess$.deteleGroup(action.id)),
        switchMap((id) => of(GroupsActions.removeGroupSuccess({ id }))),
        catchError((error) => {
          return of(GroupsActions.removeGroupFailure({ error }));
        })        
      )
  );  
}
