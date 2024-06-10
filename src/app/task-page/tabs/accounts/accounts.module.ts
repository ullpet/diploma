import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AccountsRoutingModule} from "./accounts-routing.module";
import {AccountsComponent} from './accounts.component';
import {TuiThumbnailCardModule} from '@taiga-ui/addon-commerce';

@NgModule({
  imports: [CommonModule, AccountsRoutingModule, TuiThumbnailCardModule],
  exports: [AccountsComponent],
  declarations: [AccountsComponent]
})
export class AccountsModule {}
