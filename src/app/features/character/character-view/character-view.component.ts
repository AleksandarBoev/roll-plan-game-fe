import {Component, OnInit} from '@angular/core';
import {Character} from '../Character';

@Component({
  selector: 'app-character-view',
  standalone: false,
  templateUrl: './character-view.component.html',
  styleUrl: './character-view.component.css'
})
export class CharacterViewComponent implements OnInit {
  character: Character | undefined;

  ngOnInit(): void {
    this.character = history.state.character;
  }
}
