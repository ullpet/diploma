import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AttachmentsRoutingModule} from "./attachments-routing.module";
import {AttachmentsComponent} from './attachments.component';

@NgModule({
  imports: [CommonModule, AttachmentsRoutingModule],
  exports: [AttachmentsComponent],
  declarations: [AttachmentsComponent]
})
export class AttachmentsModule {}
