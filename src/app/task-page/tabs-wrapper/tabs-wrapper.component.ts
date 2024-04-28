import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TabList} from "./tab-list";

@Component({
  selector: 'tabs-wrapper',
  templateUrl: './tabs-wrapper.component.html',
  styleUrls: ['./tabs-wrapper.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsWrapperComponent {
  public activeTabIndex: number = 0;
  public tabList = TabList;

  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {
  }

  public navigateToTab(tabId: string): void {
    this.router.navigate([`./${tabId}`], { relativeTo: this.activatedRoute });
  }
}
