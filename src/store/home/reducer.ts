import { Reducer } from "redux";
import { HomeState, HomeActionTypes } from ".";

const initialState: HomeState = {
  data: {},
  errors: undefined,
  loading: false,
  updating: false
};

const reducer: Reducer<HomeState> = (state = initialState, action) => {
  switch (action.type) {
    case HomeActionTypes.FETCH_LIST_REQUEST: {
      return { ...state, loading: true };
    }
    case HomeActionTypes.FETCH_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    }
    case HomeActionTypes.FETCH_LIST_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }

    default: {
      return state;
    }
  }
};

export { reducer as homeReducer };
