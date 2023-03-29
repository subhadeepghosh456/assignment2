import React, { useState } from "react";
import BodyContainer from "./BodyContainer";
import Header from "./Header";
import Navbar from "./Navbar";
import { info } from "../constant/config";


const Body = () => {
  const [data, setData] = useState(info);

  const unique = ["All", ...new Set(info.map((item) => item.catagory))];
  const [uniquedata] = useState(unique);

  const filterData = (filterItem) => {
    if(filterItem==="All"){
      setData(info);
      return;
    }
    const newData = info.filter((item) => item.catagory === filterItem);
    setData(newData);
  };

  return (
    <div className="body">
      <Header />
      <Navbar uniquedata={uniquedata} filterData={filterData} />
      <BodyContainer data={data} />
    </div>
  );
};

export default Body;
