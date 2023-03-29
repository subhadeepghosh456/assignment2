import React from "react";
import Card from "./Card";

const BodyContainer = ({ data }) => {
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"20px",paddingInline:"20px"}}>
      {data.map((item) => (
        <Card {...item} key={item.id}/>
      ))}
    </div>
  );
};

export default BodyContainer;
