import {NgModule} from "@angular/core";
import {AuthPageComponent} from "./auth-page.component";
import {CommonModule} from "@angular/common";
import {AuthPageRoutingModule} from "./auth-page-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiInputModule, TuiInputPasswordModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";

@NgModule({
  imports: [CommonModule, AuthPageRoutingModule, ReactiveFormsModule, TuiInputModule, TuiInputPasswordModule, TuiButtonModule],
  exports: [AuthPageComponent],
  declarations: [AuthPageComponent]
})
export class AuthPageModule {}
