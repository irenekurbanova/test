export enum ActionType {
  country = "country",
  city = "city",
  universityType = "universityType",
  accomodationType = "accomodationType",
  paymentType = "paymentType",
}

interface Action {
  type: ActionType;
  payload: string;
}

interface State {
  country: string;
  city: string;
  universityType: string;
  accomodationType: string;
  paymentType: string;
}

export const init: State = {
  country: "",
  city: "",
  universityType: "",
  accomodationType: "",
  paymentType: "",
};

export function reducer(state: State, action: Action): State {
  const { type, payload } = action;
  switch (type) {
    case ActionType.country: {
      return { ...init, universityType: state.universityType, country: payload };
    }
    case ActionType.city: {
      return { ...init, country: state.country, universityType: state.universityType, city: payload };
    }
    case ActionType.universityType: {
      return { ...state, universityType: payload };
    }
    case ActionType.accomodationType: {
      if (payload === "Не интересует") {
        return { ...state, accomodationType: payload, paymentType: "N/A" };
      } else return { ...state, accomodationType: payload };
    }
    case ActionType.paymentType: {
      return { ...state, paymentType: payload };
    }
    default:
      return state;
  }
}
