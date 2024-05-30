import { Accomodation, City, Country, Payment, University, type DataTest } from "./types";

export const dataTest: DataTest = {
  countries: [
    { name: Country.RF, value: Country.RF },
    { name: Country.RB, value: Country.RB },
  ],
  cities: [
    { city: [City.Minsk, City.Gomel], country: Country.RB },
    { city: [City.Moscow, City.Sochi], country: Country.RF },
  ],
  universityType: [University.Tech, University.Human],
  accommodationType: [
    { accommodationOption: Accomodation.Dormitory, country: [Country.RB, Country.RF] },
    { accommodationOption: Accomodation.Rent, country: [Country.RF] },
    { accommodationOption: Accomodation["Not interested"], country: [Country.RB, Country.RF] },
    { accommodationOption: Accomodation["Dormitory + Rent"], country: [Country.RF] },
  ],
  paymentType: [
    { paymentOption: Payment.Semester, accomodation: [Accomodation.Dormitory] },
    {
      paymentOption: Payment.Monthly,
      accomodation: [Accomodation.Dormitory, Accomodation["Dormitory + Rent"], Accomodation.Rent],
    },
    { paymentOption: Payment.Weekly, accomodation: [Accomodation.Rent] },
  ],
};
