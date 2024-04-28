import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import {TuiAlertService} from "@taiga-ui/core";

@Component({
  selector: 'client-heading',
  templateUrl: './client-heading.component.html',
  styleUrls: ['./client-heading.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientHeadingComponent {
  constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService, private clipboard: Clipboard) { }
  public copyContent(content: string): void {
    this.clipboard.copy(content);

    this.alerts
      .open('ID контакта скопирован', { label: content, status: 'success'})
      .subscribe();
  }
}
