import React from "react";
const Table = ({ data }) => {
  console.log("Itemlist1", data[0].address.city);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dt) => (
            <tr key={dt.id}>
              <td>{dt.name}</td>
              <td>{dt.email}</td>
              <td>{dt.address.city}</td>
              <td>{dt.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Table;
