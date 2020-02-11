import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {ThoughtsService} from '../thoughts.service';

@Component({
  selector: 'app-zlotemysli',
  templateUrl: './zloties.component.html',
  styleUrls: ['./zloties.component.scss']
})
export class ZlotiesComponent {

  thoughts: Array<Item> = new Array<Item>();
  screen = '';

  constructor(private thoughtsService: ThoughtsService) {
    this.thoughts = this.thoughtsService.get('mysli');
  }

  newZlotaMysl() {
    if (this.screen !== '') {
      this.thoughts.push(new Item(moment(), this.screen));
      this.thoughtsService.set('mysli', this.thoughts);
    }
    this.screen = '';
  }

  deleteThought(item: Item) {
    this.thoughts = this.thoughts.filter(obj => obj !== item);
    this.thoughtsService.set('mysli', this.thoughts);

  }

}

export class Item {
  date: moment.Moment;
  content: string;

  constructor(date: moment.Moment, content: string) {
    this.date = date;
    this.content = content;

  }
}
