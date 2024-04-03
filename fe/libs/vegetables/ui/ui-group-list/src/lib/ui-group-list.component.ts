import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsEntity } from '@nx-mygarden/state-groups';

@Component({
  selector: 'lib-ui-group-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-group-list.component.html',
  styleUrl: './ui-group-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiGroupListComponent {
  @Input() list: GroupsEntity[] = [];

  @Output() edit = new EventEmitter<GroupsEntity>();
  @Output() delete = new EventEmitter<number>();

  handleEditGroup(group: GroupsEntity): void {
    this.edit.emit(group);
  }

  handleDeleteGroup(id: number): void {
    this.delete.emit(id);
  }  
}
