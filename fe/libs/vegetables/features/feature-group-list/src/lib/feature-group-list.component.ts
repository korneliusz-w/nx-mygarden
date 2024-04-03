import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataAccessGroupServiceService } from '@nx-mygarden/data-access-group';
import { Group} from '@nx-mygarden/shared';
import { GroupsState, initGroups } from '@nx-mygarden/state-groups';

@Component({
  selector: 'lib-feature-group-list',
  templateUrl: './feature-group-list.component.html',
  styleUrl: './feature-group-list.component.scss',
})
export class FeatureGroupListComponent {
  // groupList$ = this.dataAccessGroups.getGroups();

  constructor(
    private store: Store<GroupsState>,
    private readonly dataAccessGroups: DataAccessGroupServiceService) {
    console.log('feature group list')
    // this.dataAccessGroups.getGroups().subscribe(console.log)
    this.store.dispatch(initGroups())
  }

  handleDeleteGroup(id: number): void {
    // this.dataAccessGroups.deteleGroup(id).subscribe()
    // this.groupList = this.groupList.filter(item => item.id !== id);
  }

  handleEditGroup(group: Group): void {
    console.log(group)
    // this.currentGroup = {
    //   ...group,
    // };
  }  
}
