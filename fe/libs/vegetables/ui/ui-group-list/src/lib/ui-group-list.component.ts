import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Group } from '@nx-mygarden/shared';

@Component({
  selector: 'lib-ui-group-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-group-list.component.html',
  styleUrl: './ui-group-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiGroupListComponent {
  @Input() list: Group[] = [];

  @Output() edit = new EventEmitter<Group>();
  @Output() delete = new EventEmitter<number>();

  handleEditGroup(group: Group): void {
    this.edit.emit(group);
  }

  handleDeleteGroup(id: number): void {
    this.delete.emit(id);
  }  
}
