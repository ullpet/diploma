import {NgModule} from "@angular/core";
import {ClientHeadingComponent} from "./client-heading.component";
import {CommonModule} from "@angular/common";
import {TuiBadgeModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiSvgModule} from "@taiga-ui/core";

@NgModule({
  imports: [CommonModule, TuiBadgeModule, TuiSvgModule, TuiButtonModule],
  exports: [ClientHeadingComponent],
  declarations: [ClientHeadingComponent]
})
export class ClientHeadingModule {}
