import {Component, signal, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {backendUrls} from '../../../constants/backend-urls';
import {routeValues} from '../../../constants/route-values';

@Component({
  selector: 'app-character-create',
  standalone: false,
  templateUrl: './character-create.component.html',
  styleUrl: './character-create.component.css'
})
export class CharacterCreateComponent {
  protected readonly Gender = Gender;
  protected readonly nameValueHint = signal('');
  protected readonly races = this._getRacesSorted();
  protected strength = 8;
  protected dexterity = 8;
  protected constitution = 8;
  protected wisdom = 8;
  protected intelligence = 8;
  protected charisma = 8;

  @ViewChild('characterCreationForm') form: NgForm | undefined;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  createCharacter() {
    if (!this.form) {
      return;
    }

    const characterCreateRequest: CharacterCreateRequest = this.form.value as CharacterCreateRequest;
    this.httpClient.post<CharacterCreateRequest>(backendUrls.CHARACTER_CREATE_URL, characterCreateRequest)
      .subscribe(characterCreateResponse => {
        this.router.navigate([routeValues.CHARACTER])
      })
  }

  /**
   * Enable dynamic hint for name value input from form.
   */
  protected onInput(event: Event) {
    this.nameValueHint.set((event.target as HTMLInputElement).value);
  }

  private _getRacesSorted(): string[] {
    return Object.values(Race).sort((raceName1, raceName2) => raceName1.localeCompare(raceName2));
  }
}

enum Gender {
  MALE = 'Male', FEMALE = 'Female'
}

enum Race {
  ELF = 'Elf',
  HUMAN = 'Human',
  DWARF = 'Dwarf',
  DRAGONBORN = 'Dragonborn',
  HALF_ELF = 'Half-elf',
  GNOME = 'Gnome',
  ORC = 'Orc',
  HALF_ORC = 'Half-orc',
  GITHYANKI = 'Githyanki',
  HALFLING = 'Halfling',
  AARAKOCRA = 'Aarakocra',
  DROW = 'Drow',
  KENKU = 'Kenku'
}

export interface CharacterCreateRequest {
  "name": string,
  "race": string,
  "gender": string,
  "strength": string,
  "dexterity": string,
  "constitution": string,
  "intelligence": string,
  "wisdom": string,
  "charisma": string
}
