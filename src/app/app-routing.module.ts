import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/inbox',
    loadChildren: () => import('./folder/inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'folder/outbox',
    loadChildren: () => import('./folder/outbox/outbox.module').then( m => m.OutboxPageModule)
  },
  {
    path: 'folder/detail/:id',
    loadChildren: () => import('./folder/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
