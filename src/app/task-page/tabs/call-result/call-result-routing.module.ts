import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CallResultComponent} from "./call-result.component";

const routes: Routes = [
  {
    path: '',
    component: CallResultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallResultRountingModule {}
