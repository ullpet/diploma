import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TuiAlertService} from "@taiga-ui/core";

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalInfoComponent {
  public personalInfoForm = new FormGroup({
    name: new FormControl('Алина'),
    lastName: new FormControl('Васильевна'),
    middleName: new FormControl('Смирнова'),
    phone: new FormControl('+7 962 611 15 17'),
    city: new FormControl('Москва'),
    street: new FormControl('Советская'),
    flat: new FormControl('15'),
    gender: new FormControl('Ж'),
  })

  constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}

  public saveData(): void {
    this.alerts
      .open('Продолжай работу', { label: 'Данные успешно сохранены', status: 'success'})
      .subscribe();
  }
}
