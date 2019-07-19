import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharacterComponent } from './components/shared/character/character.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'personajes', component: CharacterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{};