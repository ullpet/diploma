import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';

@Component({
  selector: 'attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttachmentsComponent {}