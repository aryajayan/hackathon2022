import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FeedComponent } from './feed/feed.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
  {
    path: 'homePage',
    component: HomeComponent,
  },
  {
    path: 'feed',
    component: FeedComponent,
  },

  {
    path: 'themes',
    component: ThemesComponent,
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/homePage',
  },
  {
    path: '**',
    redirectTo: '/homePage',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
