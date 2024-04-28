import {NgModule} from "@angular/core";
import {GetTaskPageComponent} from "./get-task-page.component";
import {CommonModule} from "@angular/common";
import {GetTaskPageRoutingModule} from "./get-task-page-routing.module";
import {TuiButtonModule} from "@taiga-ui/core";

@NgModule({
  imports: [CommonModule, GetTaskPageRoutingModule, TuiButtonModule],
  exports: [GetTaskPageComponent],
  declarations: [GetTaskPageComponent]
})
export class GetTaskPageModule {}
