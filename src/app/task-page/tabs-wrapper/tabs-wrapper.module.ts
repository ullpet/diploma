import {NgModule} from "@angular/core";
import {TabsWrapperComponent} from "./tabs-wrapper.component";
import {CommonModule} from "@angular/common";
import {TuiTabsModule} from "@taiga-ui/kit";

@NgModule({
  imports: [CommonModule, TuiTabsModule],
  exports: [TabsWrapperComponent],
  declarations: [TabsWrapperComponent]
})
export class TabsWrapperModule {}
