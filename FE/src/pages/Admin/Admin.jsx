import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link } from "react-router";
function Admin() {
  const [myData, setmyData] = useState([]);
  const [search, setsearch] = useState("");
  const [mySort, setmySort] = useState({
    name: "",
    order: true,
  });
  const URL = "http://localhost:3000";
  async function readData() {
    const res = await axios.get(URL);
    setmyData(res.data);
  }
  async function deleteDataById(id) {
    const res = await axios.delete(`${URL}/${id}`);
    readData();
  }
  useEffect(() => {
    readData();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <button onClick={()=>setmySort({name:"name", order:true})}>a-z</button>
        <button onClick={()=>setmySort({name:"name", order:false})}>z-a</button>
        <Link to={"/add"}><button>add new data</button></Link>
      </div>
      <Table striped bordered hover border={1} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myData
            .toSorted((a, b) =>
              mySort.order
                ? a[mySort.name] > b[mySort.name]
                  ? 1
                  : b[mySort.name] > a[mySort.name]
                  ? -1
                  : 0
                : a[mySort.name] < b[mySort.name]
                ? 1
                : b[mySort.name] < a[mySort.name]
                ? -1
                : 0
            )
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <tr>
                <td>
                  <div>
                    <img src={item.image} style={{ width: "100px" }} />
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => deleteDataById(item._id)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Admin;
