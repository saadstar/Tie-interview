import React, { useEffect, useState } from 'react'
import { Data } from './dummyData';
import {Relocate } from './Modal';

export const Tablet = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [list, setList] = useState(Data);
    const [departmentN, setDepartmentN] = useState("");

    const handleChange = (id) => {
        const newList = list.map((i) =>
          i.id === id ? { ...i, department: departmentN} : i
        );
        setList(newList);
    }
  return (
    <div className="tablet">
      <div className="search">
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search on Skills"
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="tabletsection">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Skills</th>
              <th scope="col">Performance</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {list
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.skills.toLowerCase().includes(search);
            })
            .map((item) => {
              const btnClicker = () => {
                handleChange(item.id);
                setModalOpen(true);
              };
              return (
                <tbody key={item.id}>
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.department}</td>
                    <td>{item.skills}</td>
                    <td>{item.performance}</td>
                    <td>
                      <button
                        onClick={btnClicker}
                        className="btn btn-outline-secondary"
                      >
                        Relocate
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
      {modalOpen && (
        <Relocate
          setModalOpen={setModalOpen}
          departmentN={departmentN}
          setDepartmentN={setDepartmentN}
          handleChange={handleChange}
        />
      )}
    </div>
  );
}
