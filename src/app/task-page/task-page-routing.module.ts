import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskPageComponent} from "./task-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personal-info',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TaskPageComponent,
    children: [
      {
        path: 'personal-info',
        loadChildren: () => import('./tabs/personal-info/personal-info.module').then(m => m.PersonalInfoModule),
      },
      {
        path: 'applications-info',
        loadChildren: () => import('./tabs/applications-info/applications-info.module').then(m => m.ApplicationsInfoModule),
      },
      {
        path: 'job',
        loadChildren: () => import('./tabs/job/job.module').then(m => m.JobModule),
      },
      {
        path: 'attachments',
        loadChildren: () => import('./tabs/attachments/attachments.module').then(m => m.AttachmentsModule),
      },
      {
        path: 'call-result',
        loadChildren: () => import('./tabs/call-result/call-result.module').then(m => m.CallResultModule),
      },
      {
        path: 'accounts',
        loadChildren: () => import('./tabs/accounts/accounts.module').then(m => m.AccountsModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskPageRoutingModule {}
