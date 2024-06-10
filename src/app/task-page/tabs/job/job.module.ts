import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { JobComponent } from "./job.component";
import { JobRoutingModule } from "./job-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import {TuiInputModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";

@NgModule({
  imports: [CommonModule, JobRoutingModule, ReactiveFormsModule, TuiInputModule, TuiButtonModule],
  exports: [JobComponent],
  declarations: [JobComponent]
})
export class JobModule {}
