import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HearthComponent} from './features/hearth/hearth.component';
import {CharacterComponent} from './features/character/character.component';
import {InventoryComponent} from './features/inventory/inventory.component';
import {InteractionsComponent} from './features/interactions/interactions.component';
import {PageNotFoundComponent} from './features/page-not-found/page-not-found.component';
import {RegisterComponent} from './features/register/register.component';
import {LoginComponent} from './features/login/login.component';
import {LogoutComponent} from './features/logout/logout.component';

const routes: Routes = [
  {path: '', redirectTo: 'hearth', pathMatch: 'full'},
  {path: 'hearth', component: HearthComponent},
  {path: 'character', component: CharacterComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'interactions', component: InteractionsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
