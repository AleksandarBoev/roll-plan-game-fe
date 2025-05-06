import {ErrorHandler, NgModule} from '@angular/core';
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationInterceptor} from './core/security/authentication.interceptor';
import { ScoreModifierCalcPipe } from './features/character/ability-score-calc.pipe';
import { CharacterCreateComponent } from './features/character/character-create/character-create.component';
import {GlobalErrorHandler} from './core/global-error-handler';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton, MatButtonModule, MatIconButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from '@angular/material/input';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatRow,
  MatTable, MatTableModule
} from '@angular/material/table';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatSelect} from "@angular/material/select";
import { CharacterViewComponent } from './features/character/character-view/character-view.component';
import {CharacterDeleteComponent} from './features/character/character-delete/character-delete.component';
import { CharacterVisualizationComponent } from './features/character/character-visualization/character-visualization.component';
import {CharacterEditComponent} from './features/character/character-edit/character-edit.component';

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
    CharacterEditComponent,
    CharacterDeleteComponent,
    CharacterVisualizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuItem,
    MatMenuTrigger,
    MatMenu,
    MatToolbar,
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatCardTitle,
    MatCardSubtitle,
    MatGridList,
    MatGridTile,
    MatCardContent,
    MatFormField,
    MatInput,
    MatLabel,
    MatHint,
    ReactiveFormsModule,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
    MatError,
    MatRadioGroup,
    MatRadioButton,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatCell,
    MatHeaderCell,
    MatIconButton,
    MatIcon,
    MatHeaderRow,
    MatRow,
    MatSelect
  ],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
