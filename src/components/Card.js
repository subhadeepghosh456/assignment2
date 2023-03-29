import React from "react";

const Card = ({ img, title, catagory, time, date, lession, dept }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column",border:"1px solid black",width:"200px",height:"250px" }}>
      <div style={{ width: "100%" }}>
        <img src={img} alt="addVertisement" style={{ width: "100%" }} />
      </div>
      <div style={{paddingInline:"20px"}}>
        <h5 style={{ height: "5px", paddingBlock: 8, margin: 0 }}>{title}</h5>
        <span style={{ fontSize: "10px" }}>Last Updated:{date}</span>
        <div>
          <span style={{ fontSize: "10px" }}>Lession:{lession}</span>
          <span style={{ fontSize: "10px", marginLeft: "2px" }}>
            Minutes:{time}
          </span>
        </div>
        <span style={{ fontSize: "10px" }}>{catagory}</span>
        <div>
          <span style={{ fontSize: "10px",paddingInline:"5px", backgroundColor:"gray",borderRadius:"20px" }}>{dept}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
