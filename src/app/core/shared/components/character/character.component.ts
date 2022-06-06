import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../../models/characters/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input('character') item: Character = {};
  constructor() { }

  ngOnInit(): void {
  }

}
