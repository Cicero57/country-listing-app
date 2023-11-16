import { Card } from "antd";
import React from "react";
const items = [
  {
    id: 1,
    title: "nigeria",
    capital: "abuja",
    population: 1000,
  },
  {
    id: 2,
    title: "usa",
    capital: "dc",
    population: 3000,
  },
  {
    id: 3,
    title: "brazil",
    capital: "brasilia",
    population: 1000,
  },
  {
    id: 4,
    title: "germany",
    capital: "berlin",
    population: 7000,
  },
];
const Home = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-6 items-center justify-center mx-auto">
        {items.map((item) => (
          <Card
            key={item.id}
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <div>
              {/* <h1>Country: {item.title}</h1> */}
              <p>
                Capital: <span>{item.capital}</span>
              </p>
              <p>
                Population: <span>{item.population}</span>
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
