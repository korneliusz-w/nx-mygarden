import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GroupsEntity, GroupsState, loadGroups, removeGroup, selectAllGroups } from '@nx-mygarden/state-groups';


@Component({
  selector: 'lib-feature-group-list',
  templateUrl: './feature-group-list.component.html',
  styleUrl: './feature-group-list.component.scss',
})
export class FeatureGroupListComponent {
  groupList$ = this.store.select(selectAllGroups);

  constructor(
    private store: Store<GroupsState>) {
    this.store.dispatch(loadGroups())
  }

  handleDeleteGroup(id: number): void {
    this.store.dispatch(removeGroup({ id }))
    // this.dataAccessGroups.deteleGroup(id).subscribe()
    // this.groupList = this.groupList.filter(item => item.id !== id);
  }

  handleEditGroup(group: GroupsEntity): void {
    console.log(group)    
    // this.currentGroup = {
    //   ...group,
    // };
  }  
}
