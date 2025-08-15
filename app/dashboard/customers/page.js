"use client";
import Header from "@/components/Header";
import React from "react";
import Main from "@/components/Main";
import PersonIcon from "@mui/icons-material/Person";
import { BsThreeDotsVertical } from "react-icons/bs";
import useFetch from "@/hooks/useFetch";
import CircularProgress from "@mui/material/CircularProgress";

const url = "https://6898f944ddf05523e5603e9d.mockapi.io/data";

const CustomersPage = () => {
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
      <Header sectionName="customers" para="Welcome Back, clint" />
      <div className="p-4">
        <div className="w-full p-4 bg-white rounded-lg m-auto overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="sm:text-left text-right">Email</span>
            <span className="hidden md:grid ">Last order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
        </div>
        <ul>
          {data.map(order => (
            <li
              key={order.id}
              className="bg-gray-50 hover:bg-gray-100 my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <PersonIcon className="text-purple-800" />
                </div>
                <p className="pl-4">{`${order.name.first} ${order.name.last}`}</p>
              </div>
              <p className="text-right sm:text-left text-gray-600">
                {order.name.first}@gmail.com
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
    </Main>
  );
};

export default CustomersPage;
