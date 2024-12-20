import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Character} from '../Character';
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

  @ViewChild('characterCreationForm') form: NgForm | undefined;


  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getRaces(): string[] {
    return Object.values(Race);
  }

  createCharacter() {
    //TODO add validations
    if (!this.form) {
      return;
    }

    const characterCreateRequest: CharacterCreateRequest = this.form.value as CharacterCreateRequest;
    this.httpClient.post<CharacterCreateRequest>(backendUrls.CHARACTER_CREATE_URL, characterCreateRequest)
      .subscribe(characterCreateResponse => {
        this.router.navigate([routeValues.CHARACTER])
      })
  }
}

enum Gender {
  MALE = 'Male', FEMALE = 'Female'
}

enum Race {
  ELF = 'Elf', HUMAN = 'Human', DWARF = 'Dwarf'
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
