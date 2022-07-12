import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css'],
})
export class SearchComponentComponent implements OnInit {
  constructor() {}
  @Output() submit = new EventEmitter();

  @Output() onReset = new EventEmitter();
  searchText!: '';
  ngOnInit(): void {}

  onSearch(event: any) {
    console.log(event.target.value);
  }

  // set(searchInput: any): void {
  //   this.searchText = searchInput;
  // }
  onClear(searchInput: any): void {
    searchInput.value = '';
  }

  // reset(): void {
  //   this.onReset.emit();
  //   this.set('');
  // }
}
