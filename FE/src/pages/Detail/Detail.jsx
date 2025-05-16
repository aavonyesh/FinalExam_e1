import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Detail() {
    const {id}=useParams()
    const URL = "http://localhost:3000"
    const [myItem, setmyItem] = useState([])
    async function readItem() {
        const res = await axios.get(`${URL}/${id}`)
        setmyItem(res.data)
    }
    useEffect(() => {
      readItem()
    }, [URL])
    
  return (
    <div>
        <img src={myItem.image} style={{width:"200px"}}/>
        <h3>{myItem.name}</h3>
        <p>{myItem.price}</p>
    </div>
  )
}

export default Detail