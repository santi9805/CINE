import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './main/auth/login/login.component';
import { HomeComponent } from './main/pages/home/home.component';
import { MovieComponent } from './main/pages/movie/movie.component';


const routes: Routes = [
  {
    path: 'auth/login', component: LoginComponent
  },
  {
    path: 'inicio', component: HomeComponent
  },
  {
    path: 'pelicula/:id', component: MovieComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
