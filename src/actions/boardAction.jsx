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
} from "./types";
import uuid from "uuid";

export const addBoard = name => {
  return dispatch => {
    dispatch({
      type: ADD_BOARD,
      payload: name
    });
  };
};

export const addList = name => {
  return dispatch => {
    dispatch({
      type: ADD_LIST,
      payload: name
    });
  };
};

export const addCard = card => {
  return dispatch => {
    dispatch({
      type: ADD_CARD,
      payload: card
    });
  };
};

export const setCards = item => {
  return dispatch => {
    dispatch({
      type: SET_CURRENT_CARD,
      payload: item
    });
  };
};

export const updateCard = card => {
  return dispatch => {
    dispatch({
      type: UPDATE_CARD,
      payload: card
    });
  };
};

export const setList = item => {
  return dispatch => {
    dispatch({
      type: SET_CURRENT_LIST,
      payload: item
    });
  };
};

export const updateList = list => {
  return dispatch => {
    dispatch({
      type: UPDATE_LIST,
      payload: list
    });
  };
};

export const deleteList = id => {
  return dispatch => {
    dispatch({
      type: DELETE_LIST,
      payload: id
    });
  };
};

export const deleteCard = id => {
  return dispatch => {
    dispatch({
      type: DELETE_CARD,
      payload: id
    });
  };
};

export const rearrange = rearr => {
  return dispatch => {
    dispatch({
      type: REARRANGE,
      payload: rearr
    });
  };
};

export const rearrangec = rearr => {
  return dispatch => {
    dispatch({
      type: REARRANGEC,
      payload: rearr
    });
  };
};
