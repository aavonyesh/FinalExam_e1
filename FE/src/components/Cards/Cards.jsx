import React from 'react'
import { FaBusAlt } from "react-icons/fa";

function Cards() {
  return (
    <div style={{display:"flex"}}>
        <div>
            <div style={{width:"120px",height:"120px",backgroundColor:"pink",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}><FaBusAlt/></div>
            <h5>Free Shipping</h5>
            <p>On order over $100</p>
        </div>
        <div>
            <div style={{width:"120px",height:"120px",backgroundColor:"pink",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}><FaBusAlt/></div>
            <h5>Free Shipping</h5>
            <p>On order over $100</p>
        </div>
        <div>
            <div style={{width:"120px",height:"120px",backgroundColor:"pink",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}><FaBusAlt/></div>
            <h5>Free Shipping</h5>
            <p>On order over $100</p>
        </div>
        <div>
            <div style={{width:"120px",height:"120px",backgroundColor:"pink",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}><FaBusAlt/></div>
            <h5>Free Shipping</h5>
            <p>On order over $100</p>
        </div>
    </div>
  )
}

export default Cards