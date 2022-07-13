import { UniversityData } from './../../../types';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityDataComponent } from '../../components/university-data/university-data.component';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-school-profile',
  templateUrl: './school-profile.component.html',
  styleUrls: ['./school-profile.component.css'],
})
export class SchoolProfileComponent implements OnInit {
  universityData?: UniversityData;

  uniData!: UniversityData[];
  constructor(
    private _activeRouter: ActivatedRoute,
    private _universityService: ServicesService
  ) {}

  ngOnInit(): void {
    const universityId = +this._activeRouter.snapshot.params['id'];
    //  this is line is object
    this.universityData =
      this._universityService.getUniversityFromId(universityId);
    this.uniData = [this.universityData!];
  }
}
