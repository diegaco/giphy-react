import { useReducer } from "react";

const ACTIONS = {
  SET_KEYWORD: 'SET_KEYWORD',
  SET_RATING: 'SET_RATING',
  INCREASE_COUNT: 'INCREASE_COUNT',
}

const reducer = (state, { type, payload }) => {
  if (type === ACTIONS.SET_KEYWORD) {
    return {
      ...state,
      search: payload
    }
  } else if (type === ACTIONS.SET_RATING) {
    return {
      ...state,
      rating: payload
    }
  } else if (type === ACTIONS.INCREASE_COUNT) {
    return {
      ...state,
      times: state.times + 1
    }
  } else {
    return state;
  }
};

export default function useForm({ initialSearch, initialRating }) {
  const [state, dispatch] = useReducer(reducer, {
    search: initialSearch,
    rating: initialRating,
    times: 0
  });

  const { search, rating, times } = state;

  return {
    search,
    rating,
    times,
    updateSearch: search =>
      dispatch({ type: ACTIONS.SET_KEYWORD, payload: search }),
    updateRating: rating =>
      dispatch({ type: ACTIONS.SET_RATING, payload: rating }),
    increaseCount: () =>
      dispatch({ type: ACTIONS.INCREASE_COUNT }),
  }
}
