import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule) },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'tests', loadChildren: () => import('./pages/tests/tests.module').then( m => m.TestsPageModule) },
  { path: 'book-content', loadChildren: () => import('./modals/book-content/book-content.module').then( m => m.BookContentPageModule) },
  {
    path: 'preferencias',
    loadChildren: () => import('./pages/preferencias/preferencias.module').then( m => m.PreferenciasPageModule)
  }
    // { path: 'homedesk', loadChildren: './pages/homedesk/homedesk.module#HomedeskPageModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
