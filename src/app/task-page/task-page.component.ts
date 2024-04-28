import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskPageComponent {}
