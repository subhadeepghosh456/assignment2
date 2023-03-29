import React from "react";

const Navbar = ({ uniquedata,filterData }) => {
 
  return (
    <div style={{width:"95%",display:"flex",justifyContent:"space-between",paddingInline:"20px",marginBlock:"30px"}}>
        <div>
      {uniquedata.map((data,index) => (
        <button key={index} style={{border:"none",backgroundColor:"white"}} onClick={()=>filterData(data)}>{data}</button>
      ))}
      </div>
      <select>
        <option>slect Item</option>
        <option>Item1</option>
      </select>
    </div>
  );
};

export default Navbar;
