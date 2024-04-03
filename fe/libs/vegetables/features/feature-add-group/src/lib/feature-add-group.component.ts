import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GroupsEntity, GroupsState, addNewGroup } from '@nx-mygarden/state-groups';

@Component({
  selector: 'lib-feature-add-group',
  templateUrl: './feature-add-group.component.html',
  styleUrl: './feature-add-group.component.scss',
})
export class FeatureAddGroupComponent {
  constructor(private store: Store<GroupsState>) {}

  handleSaveGroup(group: GroupsEntity): void {
    if (group.id === null) {
      this.store.dispatch(addNewGroup({ group }))
    }
  }


  private editGroup(group: GroupsEntity): void {
    console.log(group)
    // this.groupList = this.groupList.map(item => {
    //   if (item.id === group.id) {
    //     return group;
    //   }
    //   return item;
    // });
  }  
}
