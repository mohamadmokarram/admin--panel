import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { data } from "../data/data.js";

const RecentOrders = () => {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg bg-white overflow-scroll overflow-x-hidden">
      <h1>Recent Orders</h1>
      <ul>
        {data.map(order => (
          <li
            key={order.id}
            className="bg-gray-50 hover:bg-gray-100 p-2 my-3 rounded-lg flex items-center cursor-pointer">
            <div className="bg-purple-100 rounded-lg p-3">
              <HiOutlineShoppingBag className="text-purple-800" />
            </div>
            <div className="pl-4">
              <p className="font-bold text-gray-50-800">${order.total}</p>
              <p className="text-gray-400 text-sm">{order.name.first}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
