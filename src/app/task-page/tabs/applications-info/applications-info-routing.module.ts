import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApplicationsInfoComponent} from "./applications-info.component";

const routes: Routes = [
  {
    path: '',
    component: ApplicationsInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalInfoRoutingModule {}
