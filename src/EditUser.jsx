import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [skill, setSkill] = useState("");

  const { id } = useParams();

  const nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Axios.get(`http://localhost:3000/Employe/${id}`);
        setName(result.data.name);
        setEmail(result.data.email);
        setMobile(result.data.mobile);
        setSkill(result.data.skill);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [id]);

  const updateData = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to update?")) {
      const userData = { name, email, mobile, skill };
      try {
        await Axios.put(`http://localhost:3000/Employe/${id}`, userData);
        alert("Successfully Updated");
      } catch (error) {
        console.error("Error updating data", error);
        alert("Failed to update");
      }
    }

    nav("/userData");
  };

  return (
    <>
      <h1 className="text-center bg-dark text-light p-3 m-3">
        Edit User - {id}
      </h1>

      <form onSubmit={updateData}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row bg-dark text-light p-5">
                <div className="col-md-12">
                  <div className="form-group m-3">
                    <label>Enter Your Name</label>
                    <input
                      type="text"
                      name="empName"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group m-3">
                    <label>Enter Your Email</label>
                    <input
                      type="email"
                      name="empEmail"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group m-3">
                    <label>Enter Your Mobile</label>
                    <input
                      type="text"
                      name="empMobile"
                      className="form-control"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group m-3">
                    <label>Choose Your Skill</label>
                    <select
                      name="userSkill"
                      className="form-control"
                      value={skill}
                      onChange={(e) => setSkill(e.target.value)}
                    >
                      <option value="HTML">HTML</option>
                      <option value="CSS">CSS</option>
                      <option value="MUI">MUI</option>
                      <option value="React">React</option>
                      <option value="Angular">Angular</option>
                      <option value="Java">Java</option>
                      <option value="Spring">Spring</option>
                      <option value="AWS">AWS</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group text-center">
                    <button className="btn btn-primary">Update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditUser;
