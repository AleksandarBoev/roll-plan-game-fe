import {Component, OnInit} from '@angular/core';
import {Character} from './Character';
import {HttpClient} from '@angular/common/http';
import {backendUrls} from '../../constants/backend-urls';
import {Router} from '@angular/router';
import {routeValues} from '../../constants/route-values';

@Component({
  selector: 'app-character',
  standalone: false,
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit {
  characters: Character[] = [];

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.http.get<Character[]>(backendUrls.CHARACTER_URL)
      .subscribe(characters => this.characters = characters);
  }

  viewCharacter(character: Character): void {
    this.router.navigate(['character/view'], {state: {character}});
  }

  protected readonly routeValues = routeValues;

  deleteCharacter(character: Character) {
    this.router.navigate(['character/delete'], {state: {character}});
  }

  editCharacter(character: Character) {
    this.router.navigate(['character/edit'], {state: {character}});
  }
}
