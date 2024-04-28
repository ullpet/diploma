import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'get-task-page',
  templateUrl: './get-task-page.component.html',
  styleUrls: ['./get-task-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetTaskPageComponent {
  constructor(private readonly router: Router) {}

  public getTask(): void {
    this.router.navigate(['task-page']);
  }
}
