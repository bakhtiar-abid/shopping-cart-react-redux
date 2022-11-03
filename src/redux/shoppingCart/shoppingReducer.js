
import { ASUSINCREMENET, ASUSDECREMENT, QUANTDECREMENT, QUANTINCREAMENT, DELLQUANTDECREMENT, DELLQUANTINCREAMENT, CANONQUANTDECREMENT, CANONQUANTINCREAMENT, DELLINCREMENET, CANNONINCREMENET, DELLDECREMENT } from './actionTypes';

const initialState = {
   value: 0,
   dellValue:0,
   totalItem:0,
   price: 0,
   asus: {
      quantity: 20,
      price: (35000).toLocaleString("en-US", {
         style: "currency",
         currency: "BDT",
      }),
   },
   dell: {
      quantity: 35,
      price: (9300).toLocaleString("en-US", {
         style: "currency",
         currency: "BDT",
      }),
   },
   canon: {
      quantity: 72,
      price: (36500).toLocaleString("en-US", {
         style: "currency",
         currency: "BDT",
      }),
   },
};

const shoppingReducer = (state = initialState, action) => {
   switch (action.type) {
      case ASUSINCREMENET:
         return {
            ...state,
            value: state.value + 1,
            price: state.price + action.payload,
            totalItem: state.totalItem + 1
         };
      case DELLINCREMENET:
         return {
            ...state,
            dellValue: state.dellValue + 1,
            price: state.price + action.payload,
            totalItem: state.totalItem + 1,
         };
      case DELLDECREMENT:
         return {
            ...state,
            value: state.dellValue - 1,
            price: state.price + action.payload,
         };
      case CANNONINCREMENET:
         return {
            ...state,
            value: state.value + 1,
            price: state.price + action.payload,
         };
      case ASUSDECREMENT:
         return {
            ...state,
            value: state.value - 1,
            price: state.price - action.payload,
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
               price: (35000).toLocaleString("en-EN", {
                  style: "currency",
                  currency: "BDT",
               }),
            },
         };
      case DELLQUANTDECREMENT:
         return {
            ...state,
            asus: {
               quantity: state.dell.quantity - 1,
               price: (9300).toLocaleString("en-US", {
                  style: "currency",
                  currency: "BDT",
               }),
            },
         };
      case DELLQUANTINCREAMENT:
         return {
            ...state,
            asus: {
               quantity: state.dell.quantity + 1,
               price: (9300).toLocaleString("en-US", {
                  style: "currency",
                  currency: "BDT",
               }),
            },
         };
      case CANONQUANTINCREAMENT:
         return {
            ...state,
            asus: {
               quantity: state.canon.quantity + 1,
               price: (36500).toLocaleString("en-US", {
                  style: "currency",
                  currency: "BDT",
               }),
            },
         };
      case CANONQUANTDECREMENT:
         return {
            ...state,
            asus: {
               quantity: state.canon.quantity - 1,
               price: (36500).toLocaleString("en-US", {
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
