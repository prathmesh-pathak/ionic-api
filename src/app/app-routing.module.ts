import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'jokes', pathMatch: 'full' },
  {
    path: 'jokes',
    loadChildren: () => import('./pages/jokes/jokes.module').then(m => m.JokesPageModule)
  },
  {
    path: 'joke/:id',
    loadChildren: () => import('./pages/joke-details/joke-details.module').then(m => m.JokeDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
