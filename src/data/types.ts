export enum Country {
  RF = "РФ",
  RB = "РБ",
}

export enum City {
  Moscow = "Москва",
  Sochi = "Сочи",
  Minsk = "Минск",
  Gomel = "Гомель",
}

export enum University {
  Tech = "Технический",
  Human = "Гуманитарный",
}

export enum Accomodation {
  Dormitory = "Общежития",
  Rent = "Аренда",
  "Not interested" = "Не интересует",
  "Dormitory + Rent" = "Общежития + Аренда",
}

export enum Payment {
  NA = "N/A",
  Semester = "За семестр",
  Monthly = "Помесячно",
  Weekly = "В начале и в середине месяца",
}

export type DataTest = {
  countries: { name: Country; value: Country }[];
  cities: { city: City[]; country: Country }[];
  universityType: University[];
  accommodationType: { accommodationOption: Accomodation; country: Country[] }[];
  paymentType: { paymentOption: Payment; accomodation: Accomodation[] }[];
};
