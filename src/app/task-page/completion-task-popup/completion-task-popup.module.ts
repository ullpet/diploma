import {NgModule} from "@angular/core";
import {CompletionTaskPopupComponent} from "./completion-task-popup.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiCheckboxLabeledModule, TuiCheckboxModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TuiCheckboxLabeledModule, TuiCheckboxModule, TuiButtonModule],
  exports: [CompletionTaskPopupComponent],
  declarations: [CompletionTaskPopupComponent]
})
export class CompletionTaskPopupModule {}
