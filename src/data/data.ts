export type DataTest = {
  countries: { name: string; id: string }[];
  cities: { city: string[]; country_id: string }[];
  universityType: string[];
  accommodationType: { accommodationOption: string; country_id: string | string[] }[];
};

const id = {
  RB: "РБ",
  RF: "РФ",
};

export const dataTest: DataTest = {
  countries: [
    { name: "РБ", id: id.RB },
    { name: "РФ", id: id.RF },
  ],
  cities: [
    { city: ["Минск", "Гомель"], country_id: id.RB },
    { city: ["Москва", "Сочи"], country_id: id.RF },
  ],
  universityType: ["Технический", "Гуманитарный"],
  accommodationType: [
    { accommodationOption: "Общежития", country_id: [id.RB, id.RF] },
    { accommodationOption: "Аренда", country_id: [id.RF] },
    { accommodationOption: "Не интересует", country_id: [id.RB, id.RF] },
    { accommodationOption: "Общежития + Аренда", country_id: [id.RF] },
  ],
};
