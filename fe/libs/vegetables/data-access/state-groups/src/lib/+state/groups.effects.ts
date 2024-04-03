import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, tap } from 'rxjs';
import * as GroupsActions from './groups.actions';
import * as GroupsFeature from './groups.reducer';
import { DataAccessGroupServiceService } from '@nx-mygarden/data-access-group';

@Injectable()
export class GroupsEffects {
  private actions$ = inject(Actions);

  private dataAccess$ = inject(DataAccessGroupServiceService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      tap(() => console.log('init ')),
      ofType(GroupsActions.initGroups),
      switchMap(() => this.dataAccess$.getGroups()),
      switchMap(() => of(GroupsActions.loadGroupsSuccess({ groups: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(GroupsActions.loadGroupsFailure({ error }));
      })
    )
  );
}
