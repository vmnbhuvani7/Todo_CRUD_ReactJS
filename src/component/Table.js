import React from "react";
import deleteImg from "../assets/img/delete.png";
import updateImg from "../assets/img/update.png";
import "./table.css";

const Table = ({ data, clickOnDelete, clickOnUpdate }) => {
  return (
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <th>ID</th>
          <th>fullname</th>
          <th>city</th>
          <th>email</th>
          <th>birthDay</th>
          <th>course</th>

          <th>action</th>
        </tr>
        {/* <students delete={this.clickOnDelete.bind(this)} students={students}/> */}
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.fname}</td>
            <td>{item.city}</td>
            <td>{item.email}</td>
            <td>{item.birthDay}</td>
            <td>{item.course}</td>

            <td>
              <img
                src={deleteImg}
                width="40px"
                style={{ alignSelf: "center" }}
                onClick={() => clickOnDelete(item.id)}
              />

              <img
                src={updateImg}
                width="40px"
                style={{ alignSelf: "center" }}
                onClick={() => clickOnUpdate(item)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
