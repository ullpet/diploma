import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiAlertService} from "@taiga-ui/core";

@Component({
  selector: 'call-result',
  templateUrl: './call-result.component.html',
  styleUrls: ['./call-result.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallResultComponent {
  constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}

  public saveData(): void {
    this.alerts
      .open('Продолжай работу', { label: 'Данные успешно сохранены', status: 'success'})
      .subscribe();
  }
}