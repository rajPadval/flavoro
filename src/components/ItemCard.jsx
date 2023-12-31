import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/CartSlice";
import { incrementQty, decrementQty } from "../redux/slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";

const ItemCard = ({ id, img, name, price, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-lg rounded-lg p-2 bg-white mb-3" key={id}>
      <MdDelete
        className="absolute right-7 text-gray-600 cursor-pointer"
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed!`, {
            icon: "👋",
          });
        }}
      />
      <img
        src={img}
        alt="pizza"
        srcset=""
        className="w-[50px] h-[50px] my-auto"
      />
      <div className="bg-white leading-5 ">
        <h2 className="bg-white font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between items-center w-full bg-white">
          <span className="text-green-500 font-bold bg-white mt-1">
            ₹{price}
          </span>
          <div className="flex justify-center items-center gap-2 bg-white absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : qty == 0
              }
              className="bg-white border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none cursor-pointer transition-all ease-linear font-bold p-1 text-xl rounded-md"
            />
            <span className="text-green-500 font-semibold bg-white text-center select-none ">
              {qty}
            </span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : qty == 0
              }
              className="bg-white border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none cursor-pointer transition-all ease-linear font-bold p-1 text-xl rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
