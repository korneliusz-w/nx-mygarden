import { Component } from '@angular/core';
import { Group } from '@nx-mygarden/shared';

@Component({
  selector: 'lib-feature-add-group',
  templateUrl: './feature-add-group.component.html',
  styleUrl: './feature-add-group.component.scss',
})
export class FeatureAddGroupComponent {
  currentGroup: Group;

  private newGroup = {
    id: 0,
    name: '',
  };

  constructor() {
    this.currentGroup = {
      ...this.newGroup,
    };
  }

  handleSaveGroup(group: Group): void {
    if (group.id === 0) {
      this.addNewGroup(group);
    } else {
      this.editGroup(group);
    }
  }



  private addNewGroup(group: Group): void {
    const newGroup = {
      ...group,
    };
    // newGroup.id = this.groupList.length + 1;
    // this.groupList.push(newGroup);
  }

  private editGroup(group: Group): void {
    console.log(group)
    // this.groupList = this.groupList.map(item => {
    //   if (item.id === group.id) {
    //     return group;
    //   }
    //   return item;
    // });
  }  
}
