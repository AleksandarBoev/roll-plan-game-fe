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
import {routeValues} from './constants/route-values';

const routes: Routes = [
  {path: '', redirectTo: 'hearth', pathMatch: 'full'},
  {path: routeValues.HEARTH, component: HearthComponent},
  {path: routeValues.CHARACTER, component: CharacterComponent},
  {path: routeValues.INVENTORY, component: InventoryComponent},
  {path: routeValues.INTERACTIONS, component: InteractionsComponent},
  {path: routeValues.REGISTER, component: RegisterComponent},
  {path: routeValues.LOGIN, component: LoginComponent},
  {path: routeValues.LOGOUT, component: LogoutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
