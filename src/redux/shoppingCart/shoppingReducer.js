
import { DECREMENT, INCREMENET, QUANTDECREMENT, QUANTINCREAMENT } from './actionTypes';

const initialState = {
   value: 0,
   asus: {
      quantity: 20,
      price: (35000).toLocaleString("en-US", {
         style: "currency",
         currency: "BDT",
      }),
   },
};

const shoppingReducer = (state = initialState, action) => {
   switch (action.type) {
      case INCREMENET:
         return {
            ...state,
            value: state.value + 1,
         };
        case DECREMENT:
           return {
              ...state,
              value: state.value - 1,
           };
        case QUANTDECREMENT:
           return {
              ...state,
              asus: {
                 quantity: state.asus.quantity - 1,
                 price: (35000).toLocaleString("en-US", {
                    style: "currency",
                    currency: "BDT",
                 }),
              },
           };
        case QUANTINCREAMENT:
           return {
              ...state,
              asus: {
                 quantity: state.asus.quantity + 1,
                 price: (35000).toLocaleString("en-US", {
                    style: "currency",
                    currency: "BDT",
                 }),
              },
           };

      default:
         return state;
   }
};


export default shoppingReducer;
