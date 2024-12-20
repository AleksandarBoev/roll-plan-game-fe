import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HearthComponent} from './features/hearth/hearth.component';
import {CharacterComponent} from './features/character/character.component';
import {InventoryComponent} from './features/inventory/inventory.component';
import {InteractionsComponent} from './features/interactions/interactions.component';
import {PageNotFoundComponent} from './features/page-not-found/page-not-found.component';
import {RegisterComponent} from './features/register/register.component';
import {LoginComponent} from './features/login/login.component';
import {LogoutComponent} from './features/logout/logout.component';
import {routeValues} from './constants/route-values';
import {canActivateProtectedPage} from './core/security/app.guard';
import {CharacterViewComponent} from './features/character/character-view/character-view.component';
import {CharacterCreateComponent} from './features/character/character-create/character-create.component';

const routes: Routes = [
  {path: '', redirectTo: 'hearth', pathMatch: 'full'},
  {path: routeValues.HEARTH, component: HearthComponent},
  {path: routeValues.CHARACTER, component: CharacterComponent, canActivate: [canActivateProtectedPage]},
  {path: routeValues.CHARACTER_VIEW, component: CharacterViewComponent, canActivate: [canActivateProtectedPage]},
  {path: routeValues.CHARACTER_CREATE, component: CharacterCreateComponent, canActivate: [canActivateProtectedPage]},
  {path: routeValues.INVENTORY, component: InventoryComponent, canActivate: [canActivateProtectedPage]},
  {path: routeValues.INTERACTIONS, component: InteractionsComponent, canActivate: [canActivateProtectedPage]},
  {path: routeValues.REGISTER, component: RegisterComponent},
  {path: routeValues.LOGIN, component: LoginComponent},
  {path: routeValues.LOGOUT, component: LogoutComponent, canActivate: [canActivateProtectedPage]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
