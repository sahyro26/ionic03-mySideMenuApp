import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  // {
  //   path: 'inbox',
  //   loadChildren: () => import('./inbox/inbox.module').then( m => m.InboxPageModule)
  // },
  // {
  //   path: 'outbox',
  //   loadChildren: () => import('./outbox/outbox.module').then( m => m.OutboxPageModule)
  // },
  // {
  //   path: 'detail',
  //   loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
