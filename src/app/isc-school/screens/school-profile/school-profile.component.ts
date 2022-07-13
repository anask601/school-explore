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
  // @ViewChild('onClick', { read: UniversityDataComponent })
  // onID!: UniversityDataComponent;
  universityData!: UniversityData | undefined;
  constructor(
    private _router: Router,
    private _activeRouter: ActivatedRoute,
    private _universityService: ServicesService
  ) {}

  ngOnInit(): void {
    const universityId = +this._activeRouter.snapshot.params['id'];
    this.universityData =
      this._universityService.getUniversityFromId(universityId);
    console.log(universityId);
  }
}
