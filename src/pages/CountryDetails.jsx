import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "antd";
import Axios from "axios";

const CountryDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    const fetchBorderCountries = async () => {
      if (state?.borders && state.borders.length > 0) {
        try {
          const response = await Axios.get(
            `https://restcountries.com/v3.1/alpha?codes=${state.borders.join(
              ","
            )}`
          );
          setBorderCountries(response.data);
        } catch (error) {
          console.error("Error fetching border countries:", error);
        }
      }
    };

    fetchBorderCountries();
  }, [state]);

  return (
    <div>
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
        <div className="leading-8 my-2">
          <h3 className="font-semibold">Country: {state?.name}</h3>
          <p>
            Area: <span>{state?.area}</span>
          </p>
          <p>
            Languages:
            <span> {state?.lang}</span>
          </p>
          <div className="mt-5 lg:mt-10 flex">
            <h4> Border Countries: </h4>
            <ul>
              {borderCountries.map((borderCountry) => (
                <li key={borderCountry?.name?.common}>
                  <Link to={`/country-details/${borderCountry?.name?.common}`}>
                    {borderCountry?.name?.common}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
