import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient} from '@angular/common/http';
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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
