import React, { useState, useEffect, useCallback } from "react";
import { Card, Spin, Input, Select } from "antd";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const { Search } = Input;
const { Option } = Select;

const Home = () => {
  const navigate = useNavigate();
  const [allCountry, setCountry] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);

  // *****fetch all countries*****
  const getAllCountries = useCallback(async () => {
    setLoading(true);

    try {
      const fetchData = await Axios.get("https://restcountries.com/v3.1/all");

      // Sorting the data alphabetically based on the common name
      const sortedData = fetchData.data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountry(sortedData);
      setFilteredCountries(sortedData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllCountries(); //call getAllCountries function
  }, []);

  const handleSearch = (value) => {
    const filteredData = allCountry.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filteredData);
  };

  const handleRegionChange = (value) => {
    setSelectedRegion(value);
    if (value === "All") {
      setFilteredCountries(allCountry);
    } else {
      const filteredData = allCountry.filter(
        (country) => country.region === value
      );
      setFilteredCountries(filteredData);
    }
  };

  return (
    <div className="mt-6">
      <div className="search-bar-container  lg:w-3/4 py-3 px-5 flex flex-col lg:flex-row justify-between items-center mx-auto lg:ml-auto">
        <Search
          placeholder="Search for any country here..."
          onSearch={handleSearch}
          enterButton
          className="mb-4 lg:mb-0"
        />
        <div className="px-5 flex">
          <Select
            placeholder="Search by Region"
            style={{ marginTop: 10 }}
            onChange={handleRegionChange}
            value={selectedRegion}
          >
            <Option value="All">All</Option>
            <Option value="Africa">Africa</Option>
            <Option value="Asia">Asia</Option>
            <Option value="Europe">Europe</Option>
            <Option value="Americas">Americas</Option>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 items-center justify-center mx-auto my-10">
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <Spin size="large" />
          </div>
        ) : (
          filteredCountries?.map((country) => (
            <Card
              key={country?.name?.common}
              onClick={() => {
                navigate(`/country-details/${country?.name?.common}`, {
                  state: {
                    flag: country?.flags?.png,
                    name: country?.name?.common,
                    area: country?.area,
                    lang: Object.values(country?.languages),
                  },
                });
              }}
              style={{
                width: 300,
                height: 350,
              }}
              cover={
                <img
                  alt={country?.flags?.alt}
                  src={country?.flags?.png}
                  className="w-64 h-44 "
                />
              }
              className="shadow-lg cursor-pointer transition-all hover:scale-105 duration-700 ease-in-out"
            >
              <div className="leading-8">
                <h1 className="text-center text-sm font-semibold text-gray-700">
                  {country?.name?.common}
                </h1>
                <p>
                  Capital: <span>{country?.capital}</span>
                </p>
                <p>
                  Population: <span>{country?.population}</span>
                </p>
                <p>
                  Region: <span>{country?.region}</span>
                </p>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
