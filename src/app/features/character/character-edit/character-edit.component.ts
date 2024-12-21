import {Component, OnInit, ViewChild} from '@angular/core';
import {Character} from '../Character';
import {NgForm} from '@angular/forms';
import {backendUrls} from '../../../constants/backend-urls';
import {routeValues} from '../../../constants/route-values';
import {CharacterCreateRequest} from '../character-create/character-create.component';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-character-edit',
  standalone: false,

  templateUrl: './character-edit.component.html',
  styleUrl: './character-edit.component.css'
})
export class CharacterEditComponent implements OnInit {
  protected readonly Gender = Gender;

  @ViewChild('characterEditForm') form: NgForm | undefined;
  character: Character | undefined;
  characterName: string | undefined;
  characterRace: string | undefined;
  gender: string | undefined;
  strength: string | undefined;
  dexterity: string | undefined;
  constitution: string | undefined;
  intelligence: string | undefined;
  wisdom: string | undefined;
  charisma: string | undefined;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.character = history.state.character;
    this.characterName = this.character?.name;
    this.characterRace = this.character?.race;
    this.gender = this.character?.gender;
    this.strength = this.character?.strength;
    this.dexterity = this.character?.dexterity;
    this.constitution = this.character?.constitution;
    this.intelligence = this.character?.intelligence;
    this.wisdom = this.character?.wisdom;
    this.charisma = this.character?.charisma;
  }

  editCharacter() {
    //TODO add validations
    if (!this.form) {
      return;
    }

    const characterEditRequest: Character = this.form.value as Character;
    // @ts-ignore
    characterEditRequest.id = this.character.id;
    this.httpClient.put<CharacterCreateRequest>(backendUrls.CHARACTER_EDIT_URL, characterEditRequest)
      .subscribe(characterEditResponse => {
        this.router.navigate([routeValues.CHARACTER])
      })
  }

  getRaces(): string[] {
    return Object.values(Race);
  }
}

enum Gender {
  MALE = 'Male', FEMALE = 'Female'
}

enum Race {
  ELF = 'Elf', HUMAN = 'Human', DWARF = 'Dwarf'
}
