import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-data',
  templateUrl: './sort-data.component.html',
  styleUrls: ['./sort-data.component.css'],
})
export class SortDataComponent implements OnInit {
  sortData: Array<any> = [
    {
      id: 'best_match',
      name: 'Best Match',
      isSort: false,
      order: null,
      selected: true,
    },
    {
      id: 'best_rank',
      name: 'Best Rank',
      isSort: false,
      order: null,
      selected: false,
    },
    {
      id: 'acceptance_rate',
      name: 'Acceptance Rate',
      isSort: false,
      order: null,
      selected: false,
    },
    {
      id: 'tuition_fees',
      name: 'Tuition Fees',
      isSort: false,
      order: null,
      selected: false,
    },
  ];
  constructor() {
    this.sortData.forEach((data) => console.log(data.selected));
  }

  ngOnInit(): void {}
}
