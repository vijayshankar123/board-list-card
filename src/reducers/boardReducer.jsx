import {
  ADD_BOARD,
  ADD_LIST,
  ADD_CARD,
  SET_CURRENT_CARD,
  DELETE_LIST,
  DELETE_CARD,
  UPDATE_CARD,
  SET_CURRENT_LIST,
  UPDATE_LIST,
  REARRANGE,
  REARRANGEC
} from "../actions/types";

const initialState = {
  board: "",
  loading: true,
  list: [],
  card: [],
  current: null,
  currentList: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_BOARD:
      return {
        ...state,
        board: action.payload,
        loading: false
      };
    case ADD_LIST:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case ADD_CARD:
      return {
        ...state,
        card: [...state.card, action.payload],
        loading: false
      };
    case SET_CURRENT_CARD:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    case SET_CURRENT_LIST:
      return {
        ...state,
        currentList: action.payload,
        loading: false
      };
    case UPDATE_CARD:
      return {
        ...state,
        card: state.card.map(
          item => (item.cardId == action.payload.cardId ? action.payload : item)
        ),
        loading: false
      };
    case UPDATE_LIST:
      return {
        ...state,
        list: state.list.map(
          item => (item.id == action.payload.id ? action.payload : item)
        ),
        loading: false
      };
    case DELETE_LIST:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      };
    case DELETE_CARD:
      return {
        ...state,
        card: state.card.filter(item => item.cardId !== action.payload),
        loading: false
      };
    case REARRANGE:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case REARRANGEC:
      return {
        ...state,
        card: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
/*state.list.splice(
          action.payload.rearr.end,
          0,
          state.list.splice(action.payload.rearr.start, 1)[0]
        ),*/
