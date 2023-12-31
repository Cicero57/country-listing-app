import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";

const CountryDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  return (
    <div className="m-1">
      <Button
        className="shadow-lg px-8 m-5"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </Button>
      <div className="h-screen mx-6 flex flex-col lg:flex-row items-center justify-center lg:justify-evenly">
        <div>
          <img
            alt=" "
            src={state?.flag}
            className="w-full h-full lg:w-[450px] lg:h-[300px] rounded-md"
          />
        </div>
        <div className="leading-8 my-2 w-full lg:w-[450px]">
          <h3 className="font-semibold">Country: {state?.name}</h3>
          <p>
            Area: <span>{state?.area}</span>
          </p>
          <p>
            Languages:
            <span> {state?.lang}</span>
          </p>
          <div className="mt-5 lg:mt-10">
            <h4> Border Countries: </h4>

            <div className="flex flex-wrap items-center gap-x-2 lg:gap-x-4 whitespace-normal ">
              {state?.border?.map((borderCountry, index) => (
                <div
                  key={index}
                  className="cursor-pointer shadow-lg p-1 lg:p-2 rounded-md hover:bg-black hover:text-white"
                >
                  {borderCountry ? borderCountry : "No borders"}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
