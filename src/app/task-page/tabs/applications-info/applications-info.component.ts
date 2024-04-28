import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Applications} from "./applications";

@Component({
  selector: 'applications-info',
  templateUrl: './applications-info.component.html',
  styleUrls: ['./applications-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationsInfoComponent {
  public applications = Applications;
}
