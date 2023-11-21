import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {  toast } from "react-toastify";
 
export const Relocate = (props) => {
  const btnHandler = (e) => {
    props.setModalOpen(false);
    if (props.departmentN === "") {
      toast.error("Cant be Empty!");
    } else {
      props.handleChange();
      toast.success("Relocated Successfuly.");
    }
  }
  return (
    <div className="relocate">
      <div className="">
        <div className="top">
          <h2>Relocate The Employee</h2>
          <span onClick={() => props.setModalOpen(false)}>X</span>
        </div>
              <div className="center">
                  <label>Enter Department:</label>
          <input
            placeholder="Enter Department."
            type="text"
            onChange={(e) => props.setDepartmentN(e.target.value)}
          />
        </div>
        <div className="bottom">
          <button className="btn btn-primary " onClick={btnHandler}>Relocate</button>
        </div>
      </div>
    </div>
  );
};
