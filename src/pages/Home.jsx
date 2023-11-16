import { useState, useEffect } from "react";
import { Card } from "antd";
import Axios from "axios";

const Home = () => {
  const [allCountry, setCountry] = useState([]);

  // *****fetch all countries*****
  const getAllCountries = async () => {
    try {
      const fetchData = await Axios.get("https://restcountries.com/v3.1/all");
      console.log(fetchData);
      setCountry(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCountries(); //call getAllCountries function
  }, []);

  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-6 items-center justify-center mx-auto">
        {allCountry?.map((country) => (
          <Card
            key={country?.name?.common}
            style={{
              width: 300,
            }}
            cover={<img alt={country?.flags?.alt} src={country?.flags?.png} />}
          >
            <div>
              <h1>Country: {country?.name?.common}</h1>
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
        ))}
      </div>
    </div>
  );
};

export default Home;
