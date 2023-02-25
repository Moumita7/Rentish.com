import * as types from "./actionTypes";



export const postCity = (payload) => {
  return {
    type: types.POST_CITY,
    payload
  };
};

export const postLocation = (payload) => {
  return {
    type: types.POST_LOCATION,
    payload
  };
};

export const postDate = (payload) => {
  return {
    type: types.POST_DATE,
    payload
  };
};

