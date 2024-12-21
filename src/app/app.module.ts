import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {HearthComponent} from './features/hearth/hearth.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {InteractionsComponent} from './features/interactions/interactions.component';
import {CharacterComponent} from './features/character/character.component';
import {InventoryComponent} from './features/inventory/inventory.component';
import {RegisterComponent} from './features/register/register.component';
import {LoginComponent} from './features/login/login.component';
import {LogoutComponent} from './features/logout/logout.component';
import {PageNotFoundComponent} from './features/page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms';
import {AuthenticationInterceptor} from './core/security/authentication.interceptor';
import { CharacterViewComponent } from './features/character/character-view/character-view.component';
import { ScoreModifierCalcPipe } from './features/character/character-view/ability-score-calc.pipe';
import { CharacterCreateComponent } from './features/character/character-create/character-create.component';
import { CharacterEditComponent } from './features/character/character-edit/character-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HearthComponent,
    HeaderComponent,
    FooterComponent,
    InteractionsComponent,
    CharacterComponent,
    InventoryComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    PageNotFoundComponent,
    CharacterViewComponent,
    ScoreModifierCalcPipe,
    CharacterCreateComponent,
    CharacterEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
