import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CallResultRountingModule} from "./call-result-routing.module";
import {CallResultComponent} from './call-result.component';
import { TuiInputModule } from "@taiga-ui/kit";
import { TuiButtonModule, TuiTextfieldControllerModule } from "@taiga-ui/core";

@NgModule({
  imports: [CommonModule, CallResultRountingModule, TuiInputModule, TuiTextfieldControllerModule, TuiButtonModule],
  exports: [CallResultComponent],
  declarations: [CallResultComponent]
})
export class CallResultModule {}
