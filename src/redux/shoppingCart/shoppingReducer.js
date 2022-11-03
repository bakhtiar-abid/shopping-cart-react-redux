
import { ASUSDECREMENT, ASUSINCREMENET, CANNONDECREMENT, CANNONINCREMENET, CANONQUANTDECREMENT, CANONQUANTINCREAMENT, DELLDECREMENT, DELLINCREMENET, DELLQUANTDECREMENT, DELLQUANTINCREAMENT, QUANTDECREMENT, QUANTINCREAMENT } from './actionTypes';

const initialState = {
   value: 0,
   dellValue:0,
   canonValue: 0,
   asusProduct: false,
   dellProduct: false,
   canonProduct: false,
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
            totalItem: state.totalItem + 1,
            asusProduct: (state.asusProduct = true),
         };
      case DELLINCREMENET:
         return {
            ...state,
            dellValue: state.dellValue + 1,
            price: state.price + action.payload,
            totalItem: state.totalItem + 1,
            dellProduct: (state.dellProduct = true),
         };
      case DELLDECREMENT:
         return {
            ...state,
            dellValue: state.dellValue - 1,
            price: state.price - action.payload,
            totalItem: state.totalItem - 1,
         };

      case ASUSDECREMENT:
         return {
            ...state,
            value: state.value - 1,
            price: state.price - action.payload,
            totalItem: state.totalItem - 1,
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
            dell: {
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
            dell: {
               quantity: state.dell.quantity + 1,
               price: (9300).toLocaleString("en-US", {
                  style: "currency",
                  currency: "BDT",
               }),
            },
         };

      case CANNONINCREMENET:
         return {
            ...state,
            canonValue: state.canonValue + 1,
            price: state.price + action.payload,
            totalItem: state.totalItem + 1,
            canonProduct: (state.canonProduct = true),
         };

      case CANNONDECREMENT:
         return {
            ...state,
            canonValue: state.canonValue - 1,
            price: state.price - action.payload,
            totalItem: state.totalItem - 1,
         };

      case CANONQUANTINCREAMENT:
         return {
            ...state,
            canon: {
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
            canon: {
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
