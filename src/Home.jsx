import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [skill, setSkill] = useState("");

  const nav = useNavigate();

  const saveData = async (e) => {
    e.preventDefault();
    alert("SuccessFully Added");

    const employeeData = { name, email, mobile, skill };

    await Axios.post("http://localhost:3000/Employe", employeeData);

    nav("/userData");
  };

  return (
    <>
      <h1 className="text-center bg-dark text-light p-2 m-2">
        User Registration
      </h1>

      <form action="" onSubmit={saveData}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row bg-dark text-light p-5">
                <div className="col-md-12">
                  <div className="form-group m-3">
                    <label htmlFor="">Enter Your Name</label>
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
                    <label htmlFor="">Enter Your Email</label>
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
                    <label htmlFor="">Enter Your Mobile</label>
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
                    <label htmlFor="">Choose Your Skill</label>

                    <select
                      name="userSkill"
                      id=""
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
                    <button className="btn btn-primary"> ADD </button>
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

export default Home;
