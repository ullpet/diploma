import {NgModule} from "@angular/core";
import {PersonalInfoComponent} from "./personal-info.component";
import {CommonModule} from "@angular/common";
import {PersonalInfoRoutingModule} from "./personal-info-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiInputModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";

@NgModule({
  imports: [CommonModule, PersonalInfoRoutingModule, ReactiveFormsModule, TuiInputModule, TuiButtonModule],
  exports: [PersonalInfoComponent],
  declarations: [PersonalInfoComponent]
})
export class PersonalInfoModule {}
