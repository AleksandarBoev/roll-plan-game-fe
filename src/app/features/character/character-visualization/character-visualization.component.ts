import {Component, OnInit} from '@angular/core';
import {Character} from '../Character';
import {ScoreModifierCalcPipe} from '../ability-score-calc.pipe';

@Component({
  selector: 'app-character-visualization',
  standalone: false,

  templateUrl: './character-visualization.component.html'
})
export class CharacterVisualizationComponent implements OnInit {
  character: Character | undefined;
  displayedColumns: string[] = ['statName', 'score', 'modifier'];

  ngOnInit(): void {
    this.character = history.state.character;
  }

  public _getStats(): Stats[] {
    const scoreModifierPipe = new ScoreModifierCalcPipe();
    return [
      {statName: "Strength", score: this.character?.strength, modifier: scoreModifierPipe.transform(this.character?.strength)},
      {statName: "Dexterity", score: this.character?.dexterity, modifier: scoreModifierPipe.transform(this.character?.dexterity)},
      {statName: "Constitution", score: this.character?.constitution, modifier: scoreModifierPipe.transform(this.character?.constitution)},
      {statName: "Intelligence", score: this.character?.intelligence, modifier: scoreModifierPipe.transform(this.character?.intelligence)},
      {statName: "Wisdom", score: this.character?.wisdom, modifier: scoreModifierPipe.transform(this.character?.wisdom)},
      {statName: "Charisma", score: this.character?.charisma, modifier: scoreModifierPipe.transform(this.character?.charisma)}
    ]
  }
}

export interface Stats {
  statName: string,
  score: number | undefined,
  modifier: string | undefined
}
