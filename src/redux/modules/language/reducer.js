import {
  LANGUAGE_CHANGE
} from './const';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE_CHANGE: {
      return {
        ...state,
        language: action.payload.language
      }
    }

    default:
      return state;
  }
};

export default reducer;
