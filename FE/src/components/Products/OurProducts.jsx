import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function OurProducts() {
  const URL = "http://localhost:3000/";
  const [myData, setmyData] = useState([]);
  async function readData() {
    const res = await axios.get(URL);
    setmyData(res.data);
  }
  useEffect(() => {
    readData();
  }, []);

  return (
    <div>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",width:"80%",margin:"auto",gap:"12px"}}>
        {myData.map((x) => (
          <div style={{width:"300px",border:"1px solid black",height:"300px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src={x.image} style={{width:"200px"}}/>
            <h3>{x.name}</h3>
            <p>${x.price}</p>
            <Link to={`/detail/${x._id}`}><button>info</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProducts;
