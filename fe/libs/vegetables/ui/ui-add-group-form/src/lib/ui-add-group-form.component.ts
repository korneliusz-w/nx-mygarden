import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroupsEntity } from '@nx-mygarden/state-groups';


@Component({
  selector: 'lib-ui-add-group-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ui-add-group-form.component.html',
  styleUrl: './ui-add-group-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAddGroupFormComponent {
  @Output() saveGroup = new EventEmitter<GroupsEntity>();

  group: GroupsEntity = {
    id: null,
    name: ''
  };

  handleSaveGroup(): void {
    if (!this.group.name) return;

    this.saveGroup.emit(this.group);
  }  
}
