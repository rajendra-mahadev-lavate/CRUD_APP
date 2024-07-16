import Axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const UserData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await Axios.get("http://localhost:3000/Employe");
    // console.log(result.data);
    setData(result.data);
  };

  // console.log(data);

  const deleteRecord = async (id) => {
    if (window.confirm("Are You Shure!!")) {
      alert("Deleted");

      const result = data.filter((val) => val.id !== id);
      setData(result);

      await Axios.delete(`http://localhost:3000/Employe/${id}`);
    }
  };

  return (
    <div>
      <h1 className="text-center bg-dark text-light p-2 m-2">UserData</h1>

      <table className="table table-borderd table-hover table-responsive">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Skill</th>
          </tr>
        </thead>

        <tbody>
          {data.map((val, index) => (
            <tr key={index}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.mobile}</td>
              <td>{val.skill}</td>
              <td
                className="btn-danger m-2 "
                onClick={() => deleteRecord(val.id)}
              >
                <MdDelete />
              </td>
              <td className="btn-primary m-2 ">
                <NavLink to={`/editUser/${val.id}`}>
                  <FaEdit />
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
