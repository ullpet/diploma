import {NgModule} from "@angular/core";
import {HeadingComponent} from "./heading.component";
import {CommonModule} from "@angular/common";
import {TuiButtonModule} from "@taiga-ui/core";
import {CompletionTaskPopupModule} from "../task-page/completion-task-popup/completion-task-popup.module";

@NgModule({
  imports: [CommonModule, TuiButtonModule, CompletionTaskPopupModule],
  exports: [HeadingComponent],
  declarations: [HeadingComponent],
})
export class HeadingModule {}
