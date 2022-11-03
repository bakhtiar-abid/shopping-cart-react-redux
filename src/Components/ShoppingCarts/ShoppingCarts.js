import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    cannonDecrement,
    cannonIncrement,
   canonQuantDecrement,
   decrement,
   dellDecrement,
   dellIncrement,
   dellQuantDecrement,
   increment,
   quantDecrement,
   quantIncreament,
} from "./../../redux/shoppingCart/actions";

const ShoppingCarts = () => {
   const initialValue = useSelector((state) => state.shoppingCart.value);
   const dellInitialValue = useSelector((state) => state.shoppingCart.dellValue);
   const totalInitialItem = useSelector(
      (state) => state.shoppingCart.totalItem
   );
   const asusQuantity = useSelector(
      (state) => state.shoppingCart.asus.quantity
   );
   const dellQuantity = useSelector(
      (state) => state.shoppingCart.dell.quantity
   );
   const cannonQuantity = useSelector(
      (state) => state.shoppingCart.canon.quantity
   );
   const asusPrice = useSelector((state) => state.shoppingCart.asus.price);
   const dellPrice = useSelector((state) => state.shoppingCart.dell.price);
   const canonPrice = useSelector((state) => state.shoppingCart.canon.price);
   const initialTotalPrice = useSelector((state) => state.shoppingCart.price);

   const dispatch = useDispatch();

   const incrementHandler = (value) => {
      dispatch(increment(value));
   };
   const dellIncrementHandler = (value) => {
      dispatch(dellIncrement(value));
   };
   const cannonIncrementHandler = (value) => {
      dispatch(cannonIncrement(value));
   };

   const decrementHandler = (value) => {
      dispatch(decrement(value));
   };

   const dellDecrementHandler = (value) => {
      dispatch(dellDecrement(value));
   };
   const cannonDecrementHandler = (value) => {
      dispatch(cannonDecrement(value));
   };

   const quantDecrementHandler = () => {
      dispatch(quantDecrement());
   };
   const dellQuantDecrementHandler = () => {
      dispatch(dellQuantDecrement());
   };
   const cannonQuantDecrementHandler = () => {
      dispatch(canonQuantDecrement());
   };
   
   const quantIncrementHandler = () => {
      dispatch(quantIncreament());
   };

   return (
      <div class="bg-gray-50 h-full md:h-screen">
         <div class="grid place-items-center">
            <h1 class="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
               Shopping Cart
            </h1>
         </div>
         <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
               <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                  <div class="flex justify-between px-4 items-center">
                     <div class="text-lg font-semibold">
                        <p>Asus Vivobook X515MA ({asusQuantity})</p>
                        <p class="text-gray-400 text-base">{asusPrice}</p>
                     </div>
                     <div class="text-lg font-semibold">
                        <button
                           class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                           onClick={() => {
                              quantDecrementHandler();
                              incrementHandler(35000);
                           }}
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                           </svg>
                        </button>
                     </div>
                  </div>
               </div>
               <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                  <div class="flex justify-between px-4 items-center">
                     <div class="text-lg font-semibold">
                        <p>Dell E1916HV 18.5 Inch ({dellQuantity})</p>
                        <p class="text-gray-400 text-base">{dellPrice}</p>
                     </div>
                     <div class="text-lg font-semibold">
                        <button
                           class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                           onClick={() => {
                              dellQuantDecrement();
                              dellIncrementHandler(9300);
                           }}
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                           </svg>
                        </button>
                     </div>
                  </div>
               </div>
               <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                  <div class="flex justify-between px-4 items-center">
                     <div class="text-lg font-semibold">
                        <p>Canon Eos 4000D 18MP (72)</p>
                        <p class="text-gray-400 text-base">Tk 36,500</p>
                     </div>
                     <div class="text-lg font-semibold">
                        <button class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                           </svg>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
               <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                  <div class="flex justify-between border-b-2 mb-2">
                     <div class="text-lg py-2">
                        <p>Asus Vivobook X515MA</p>
                     </div>
                     <div class="text-lg py-2">
                        <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                           <button
                              class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                              onClick={() => {
                                 decrementHandler(35000);
                                 quantIncrementHandler();
                              }}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-4 w-4"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M18 12H6"
                                 />
                              </svg>
                           </button>
                           <p>{initialValue}</p>
                           <button
                              class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                              onClick={() => {
                                 incrementHandler(35000);
                                 quantDecrementHandler();
                              }}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-4 w-4"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                 />
                              </svg>
                           </button>
                        </div>
                     </div>
                  </div>

                  <div class="flex justify-between border-b-2 mb-2">
                     <div class="text-lg py-2">
                        <p>Dell E1916HV 18.5 Inch</p>
                     </div>
                     <div class="text-lg py-2">
                        <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                           <button
                              class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                              onClick={() => {
                                 dellDecrementHandler(9300);
                                 dellQuantDecrement();
                              }}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-4 w-4"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M18 12H6"
                                 />
                              </svg>
                           </button>
                           <p>{dellInitialValue}</p>
                           <button
                              class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                              onClick={() => {
                                 dellIncrementHandler(9300);
                                 dellQuantDecrement();
                              }}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-4 w-4"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                 />
                              </svg>
                           </button>
                        </div>
                     </div>
                  </div>

                  <div class="flex justify-between border-b-2 mb-2">
                     <div class="text-lg py-2">
                        <p>Canon Eos 4000D 18MP</p>
                     </div>
                     <div class="text-lg py-2">
                        <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                           <button class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-4 w-4"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M18 12H6"
                                 />
                              </svg>
                           </button>
                           <p>0</p>
                           <button class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-4 w-4"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                 />
                              </svg>
                           </button>
                        </div>
                     </div>
                  </div>

                  <div class="flex justify-center items-center text-center">
                     <div class="text-xl font-semibold">
                        <p>Total Item</p>
                        <p class="text-5xl">{totalInitialItem}</p>
                     </div>
                  </div>
               </div>
               <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                  <div class="flex justify-center items-center text-center">
                     <div class="text-xl font-semibold">
                        <p>Total Price</p>
                        <p class="text-5xl">{initialTotalPrice}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ShoppingCarts;
