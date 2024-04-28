import {ChangeDetectionStrategy, Component, Inject, Injector, Input} from '@angular/core';
import {Router} from "@angular/router";
import {TuiDialogService} from "@taiga-ui/core";
import {takeUntil} from "rxjs";
import {TuiDestroyService} from "@taiga-ui/cdk";
import {CompletionTaskPopupComponent} from "../task-page/completion-task-popup/completion-task-popup.component";
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.less'],
  providers: [TuiDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadingComponent {
  @Input() showFinishTaskButton: boolean = true;

  constructor(
    private readonly router: Router,
    private readonly destroy$: TuiDestroyService,
    @Inject(TuiDialogService) private readonly dialogsService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
  ) {}
  public finishTask(): void {
    this.dialogsService.open<number>(
      new PolymorpheusComponent(CompletionTaskPopupComponent, this.injector),
    )
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
      this.router.navigate(['get-task']);
    });
  }
}
