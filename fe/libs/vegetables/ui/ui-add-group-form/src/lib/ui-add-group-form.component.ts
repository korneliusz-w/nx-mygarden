import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Group } from '@nx-mygarden/shared';


@Component({
  selector: 'lib-ui-add-group-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ui-add-group-form.component.html',
  styleUrl: './ui-add-group-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAddGroupFormComponent {
  @Input() set group(data: Group) {
    this.currentGroup = {
      ...data,
    };
  }
  @Output() saveGroup = new EventEmitter();

  currentGroup!: Group;

  handleSaveGroup(): void {
    if (!this.currentGroup.name) return;

    this.saveGroup.emit(this.currentGroup);
  }  
}
