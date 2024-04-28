import {NgModule} from "@angular/core";
import {ApplicationsInfoComponent} from "./applications-info.component";
import {CommonModule} from "@angular/common";
import {PersonalInfoRoutingModule} from "./applications-info-routing.module";

@NgModule({
  imports: [CommonModule, PersonalInfoRoutingModule],
  exports: [ApplicationsInfoComponent],
  declarations: [ApplicationsInfoComponent]
})
export class ApplicationsInfoModule {}
