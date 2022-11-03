import { DECREMENT, INCREMENET, QUANTDECREMENT, QUANTINCREAMENT } from "./actionTypes";


export const increment = (value) => {
   return {
      type: INCREMENET,
      //   payload: value,
   };
};

export const decrement = (value) => {
   return {
      type: DECREMENT,
      // payload: value,
   };
};

export const quantDecrement = (value) => {
   return {
      type: QUANTDECREMENT,
      // payload: value,
   };
};
export const quantIncreament = (value) => {
   return {
      type: QUANTINCREAMENT,
      // payload: value,
   };
};
