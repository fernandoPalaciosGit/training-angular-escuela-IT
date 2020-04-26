import { Component, OnInit } from '@angular/core';
import { RockBand } from '../../models/rock-band';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {
  title = 'training angular with escuela IT';
  rockBandList: RockBand[] = [];
  readonly ANGULAR: string = 'angular';
  readonly SPRING: string = 'spring';
  today: Date = new Date();

  constructor() {
  }

  ngOnInit(): void {
  }

  private setTitle(value: string) {
    this.title = value;
  }

  changeTitle(event: { currentTarget: HTMLInputElement }) {
    this.setTitle(event.currentTarget.value);
  }

  cleanTitle() {
    this.setTitle('');
  }

  addRockBand(event: { currentTarget: HTMLInputElement }) {
    const rockBand = { name: event.currentTarget.value } as RockBand;
    this.rockBandList.push(rockBand);
  }

  removeRockBand(index: number) {
    this.rockBandList.splice(index, 1);
  }
}
