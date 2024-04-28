import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";
import {TuiDialogContext} from "@taiga-ui/core";

@Component({
  selector: 'completion-task-popup',
  templateUrl: './completion-task-popup.component.html',
  styleUrls: ['./completion-task-popup.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompletionTaskPopupComponent {
  public negativesForm = new FormGroup({
    noNegatives: new FormControl(false),
    falseWork: new FormControl(false),
    falsePassport: new FormControl(false),
    disabledClient: new FormControl(false),
    poorClient: new FormControl(false),
    fraud: new FormControl(false),
    noSolution: new FormControl(false),
  });

  constructor(@Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<boolean>) {}

  public completeTask(): void {
    this.context.completeWith(true)
  }
}
