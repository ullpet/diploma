import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetTaskPageComponent} from "./get-task-page.component";

const routes: Routes = [
  {
    path: '',
    component: GetTaskPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetTaskPageRoutingModule {}
