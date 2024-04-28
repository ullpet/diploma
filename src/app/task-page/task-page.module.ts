import {NgModule} from "@angular/core";
import {TaskPageComponent} from "./task-page.component";
import {CommonModule} from "@angular/common";
import {TaskPageRoutingModule} from "./task-page-routing.module";
import {ClientHeadingModule} from "./client-heading/client-heading.module";
import {TabsWrapperModule} from "./tabs-wrapper/tabs-wrapper.module";
import {HeadingModule} from "../heading/heading.module";

@NgModule({
  imports: [CommonModule, TaskPageRoutingModule, ClientHeadingModule, TabsWrapperModule, HeadingModule],
  exports: [TaskPageComponent],
  declarations: [TaskPageComponent]
})
export class TaskPageModule {}
