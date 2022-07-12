export type UniversityData = {
  id: number;
  name: string;
  logoUrl: string;
  location: {
    landmark: string;
    country: string;
  };
  iscRanking: {
    logo: string;
    rateNum: number;
  };
  AcceptanceRate: {
    logo: string;
    rateNum: string;
  };
  description: string;
};
