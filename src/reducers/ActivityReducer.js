import { v1 as uuidv1 } from "uuid";

export const actvityReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ACTIVITY":
      return [
        ...state,
        {
          title: action.activity.title,
          date_time: action.activity.date_time,
          id: uuidv1(),
        },
      ];
    case "REMOVE_ACTIVITY":
      return state.filter((activity) => activity.id !== action.id);
    default:
      return state;
  }
};
