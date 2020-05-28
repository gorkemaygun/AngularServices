import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { Person } from '../person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private filterService: FilterService) {}

  ngOnInit(): void {}
  get dataList(): Person[] {
    return this.filterService.getPerson();
  }
}
