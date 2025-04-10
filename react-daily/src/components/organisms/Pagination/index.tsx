import React from "react";
import "./index.css";
import { USERDATA } from "./Data";
const Datatable = () => {
  const [data, ] = React.useState(USERDATA);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  console.log(USERDATA);
  return (
    <div className="datatable">
      <table style={{width:'100%'}} className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {/* {datasli.map((user) => (
           */}
          {data.
          slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).
          map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.mobileNumber}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <div>
          <label htmlFor="rowsPerPage">Rows per page:</label>
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
        <div>
          <button onClick={() => setPage(page - 1)} disabled={page === 0}>
            Previous
          </button>
          <span>Page {page + 1}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page >= Math.ceil(data.length / rowsPerPage) - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Datatable;
