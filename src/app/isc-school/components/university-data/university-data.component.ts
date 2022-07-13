import { ServicesService } from 'src/app/services/services.service';
import { UniversityData } from './../../../types';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-university-data',
  templateUrl: './university-data.component.html',
  styleUrls: ['./university-data.component.css'],
})
export class UniversityDataComponent implements OnInit {
  universityData!: UniversityData[];

  constructor(
    private _universityService: ServicesService,
    private _router: Router
  ) {
    this.universityData = this._universityService.getUniversityData();
  }

  onClick(id: number) {
    this._router.navigate(['school-explore', id]);
  }

  ngOnInit(): void {}
}
