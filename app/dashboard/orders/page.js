"use client";

import Header from "@/components/Header";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Main from "@/components/Main";
import useFetch from "@/hooks/useFetch";
import CircularProgress from "@mui/material/CircularProgress";

const url = "https://6898f944ddf05523e5603e9d.mockapi.io/data";

const OrdersPage = () => {
  const { data, isLoading, error } = useFetch(url);

  if (isLoading) {
    return (
      <Main>
        <Header sectionName="customers" para="Welcome Back, clint" />
        <div className="w-full h-[50vh] flex justify-center items-center">
          <CircularProgress className="text-purple-500" />
        </div>
      </Main>
    );
  }

  return (
    <Main>
      <Header sectionName="orders" para="Welcome Back, clint" />
      <div className="p-4">
        <div className="w-full p-4 bg-white rounded-lg m-auto overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 my-3 p-2 items-center justify-between cursor-pointer">
            <span>Orders</span>
            <span className="sm:text-left text-right">Status</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {data.map(order => (
              <li
                key={order.id}
                className="bg-gray-50 hover:bg-gray-100 my-3 p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-between cursor-pointer">
                <div className="flex">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FaShoppingBag className="text-purple-800" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800 font-bold">
                      ${order.total.toLocaleString()}
                    </p>
                    <p className="text-gray-800 font-sm">{order.name.first}</p>
                  </div>
                </div>
                <p className="text-right sm:text-left text-gray-600">
                  <span
                    className={
                      order.status == "Processing"
                        ? "bg-green-200 p-2 rounded-lg"
                        : order.status == "Completed"
                        ? "bg-blue-200 p-2 rounded-lg"
                        : "bg-yellow-200 p-2 rounded-lg"
                    }>
                    {order.status}
                  </span>
                </p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="hidden sm:flex justify-between items-center">
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Main>
  );
};

export default OrdersPage;
