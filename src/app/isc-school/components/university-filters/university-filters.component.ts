import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university-filters',
  templateUrl: './university-filters.component.html',
  styleUrls: ['./university-filters.component.css'],
})
export class UniversityFiltersComponent implements OnInit {
  countryFilterData: Array<any> = [
    { id: 'AUS', name: 'Australia', isChecked: false },
    { id: 'AT', name: 'Austria', isChecked: false },
    { id: 'BEL', name: 'Belgium', isChecked: false },
    { id: 'CAN', name: 'Canada', isChecked: false },
    { id: 'CHI', name: 'China', isChecked: false },
    { id: 'FIN', name: 'Finland', isChecked: false },
    { id: 'FR', name: 'France', isChecked: false },
    { id: 'DE', name: 'Germany', isChecked: false },
    { id: 'IE', name: 'Ireland', isChecked: false },
    { id: 'IT', name: 'Italy', isChecked: false },
    { id: 'NL', name: 'Netherlands', isChecked: false },
    { id: 'SG', name: 'Singapore', isChecked: false },
    { id: 'ES', name: 'Spain', isChecked: false },
    { id: 'SE', name: 'Sweden', isChecked: false },
    { id: 'CH', name: 'Switzerland', isChecked: false },
    { id: 'TH', name: 'Thailand', isChecked: false },
    { id: 'GB', name: 'United Kingdom', isChecked: false },
    { id: 'US', name: 'United States of America', isChecked: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
