import {Component, OnInit} from '@angular/core';
import {Character} from '../Character';
import {backendUrls} from '../../../constants/backend-urls';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {routeValues} from '../../../constants/route-values';

@Component({
  selector: 'app-character-delete',
  standalone: false,

  templateUrl: './character-delete.component.html'
})
export class CharacterDeleteComponent implements OnInit {
  character: Character | undefined;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.character = history.state.character;
  }

  deleteCharacter() {
    this.httpClient.delete<void>(`${backendUrls.CHARACTER_URL}/${this.character?.id}`)
      .subscribe(() => this.router.navigate([routeValues.CHARACTER]));
  }
}
