import {
   ASUSDECREMENT,
   ASUSINCREMENET,
   CANNONDECREMENT,
   CANNONINCREMENET,
   CANONQUANTDECREMENT,
   CANONQUANTINCREAMENT,
   DELLDECREMENT,
   DELLINCREMENET,
   DELLQUANTDECREMENT,
   DELLQUANTINCREAMENT,
   QUANTDECREMENT,
   QUANTINCREAMENT,
} from "./actionTypes";


export const increment = (value) => {
   return {
      type: ASUSINCREMENET,
      payload: value,
   };
};
export const dellIncrement = (value) => {
   return {
      type: DELLINCREMENET,
      payload: value,
   };
};
export const cannonIncrement = (value) => {
   return {
      type: CANNONINCREMENET,
      payload: value,
   };
};

export const decrement = (value) => {
   return {
      type: ASUSDECREMENT,
      payload: value,
   };
};
export const dellDecrement = (value) => {
   return {
      type: DELLDECREMENT,
      payload: value,
   };
};
export const cannonDecrement = (value) => {
   return {
      type: CANNONDECREMENT,
      payload: value,
   };
};

export const quantDecrement = (value) => {
   return {
      type: QUANTDECREMENT,
      // payload: value,
   };
};
export const dellQuantDecrement = (value) => {
   return {
      type: DELLQUANTDECREMENT,
      // payload: value,
   };
};
export const canonQuantDecrement = (value) => {
   return {
      type: CANONQUANTDECREMENT,
      // payload: value,
   };
};

export const quantIncreament = (value) => {
   return {
      type: QUANTINCREAMENT,
      // payload: value,
   };
};
export const dellQuantIncreament = (value) => {
   return {
      type: DELLQUANTINCREAMENT,
      // payload: value,
   };
};
export const canonQuantIncreament = (value) => {
   return {
      type: CANONQUANTINCREAMENT,
      // payload: value,
   };
};
