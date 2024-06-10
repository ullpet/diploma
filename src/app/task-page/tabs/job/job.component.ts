import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TuiAlertService} from "@taiga-ui/core";

@Component({
  selector: 'job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobComponent {
  public jobInfoForm = new FormGroup({
    organizationName: new FormControl('OOO Котелок'),
    position: new FormControl('Сварщик'),
    salary: new FormControl('80 000'),
    updateDate: new FormControl('23.05.2024'),
    workingPhone: new FormControl('89765679589'),
    address: new FormControl('Королев, Советская 57А'),
  })

  constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}

  public saveData(): void {
    this.alerts
      .open('Продолжай работу', { label: 'Данные успешно сохранены', status: 'success'})
      .subscribe();
  }
}