import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';

@Component({
  selector: 'accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsComponent {}