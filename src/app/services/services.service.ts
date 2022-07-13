import { Injectable } from '@angular/core';
import { UniversityData } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  universitys: UniversityData[] = [
    {
      id: 1,
      name: 'Harvard University 1',
      logoUrl: '../../../../assets/images/iSchoolConnect-logo.svg',
      location: {
        landmark: 'Cambridge, Massachusettes',
        country: 'United States Of America',
      },
      iscRanking: {
        logo: 'isc-rank',
        rateNum: 2,
      },
      AcceptanceRate: {
        logo: 'isc-acceptance-rate',
        rateNum: '2',
      },
      description:
        'Established in 1636, Harvard University is one of the oldest and most prestigious universities in the world. The Ivy League university is placed 5th in the QS World University Rankings 2022, 2nd in THE World Rankings, 3rd in Best Value Schools, and 5th in Graduate Employability. It is also known as one of the most innovative schools in the world and is well valued among international students.',
    },
    {
      id: 2,
      name: 'Harvard University 2',
      logoUrl: '../../../../assets/images/iSchoolConnect-logo.svg',
      location: {
        landmark: 'Cambridge, Massachusetts',
        country: 'United States Of America',
      },
      iscRanking: {
        logo: 'isc-rank',
        rateNum: 2,
      },
      AcceptanceRate: {
        logo: 'isc-acceptance-rate',
        rateNum: '2',
      },
      description:
        'Established in 1636, Harvard University is one of the oldest and most prestigious universities in the world. The Ivy League university is placed 5th in the QS World University Rankings 2022, 2nd in THE World Rankings, 3rd in Best Value Schools, and 5th in Graduate Employability. It is also known as one of the most innovative schools in the world and is well valued among international students.',
    },
    {
      id: 3,
      name: 'Harvard University 3',
      logoUrl: '../../../../assets/images/iSchoolConnect-logo.svg',
      location: {
        landmark: 'Cambridge, Massachusetts',
        country: 'United States Of America',
      },
      iscRanking: {
        logo: 'isc-rank',
        rateNum: 2,
      },
      AcceptanceRate: {
        logo: 'isc-acceptance-rate',
        rateNum: '2',
      },
      description:
        'Massachusettes Institute Of Technology has the mission to advance knowledge and educate students in science,technology and other areas that will best serve the nation and the world. The university moulds the students to be productive, imaginative and welcome all the talented students regardless of where they came from.',
    },
    {
      id: 4,
      name: 'Harvard University 4',
      logoUrl: '../../../../assets/images/iSchoolConnect-logo.svg',
      location: {
        landmark: 'Cambridge, Massachusetts',
        country: 'United States Of America',
      },
      iscRanking: {
        logo: 'isc-rank',
        rateNum: 2,
      },
      AcceptanceRate: {
        logo: 'isc-acceptance-rate',
        rateNum: '2',
      },
      description:
        'Established in 1636, Harvard University is one of the oldest and most prestigious universities in the world. The Ivy League university is placed 5th in the QS World University Rankings 2022, 2nd in THE World Rankings, 3rd in Best Value Schools, and 5th in Graduate Employability. It is also known as one of the most innovative schools in the world and is well valued among international students.',
    },
  ];
  constructor() {}
  getUniversityData() {
    return this.universitys;
  }
  getUniversityFromId(id: number) {
    return this.universitys.find((e) => e.id === id);
  }
}
