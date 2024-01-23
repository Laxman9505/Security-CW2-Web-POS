import React from "react";
import "./TableSkeleton.css";
const TableSkeleton = ({ row = 4, column = 8 }) => {
  return (
    <table className="tg table-overflow">
      <tbody>
        <tr>
          {[...Array(column)].map((col, ind) => {
            return (
              <th className="tg-cly1" key={Math.random()}>
                <div className="line" />
              </th>
            );
          })}
        </tr>
        {[...Array(row)].map((col, ind) => {
          return (
            <tr key={ind}>
              {[...Array(column)].map((colm, index) => {
                return (
                  <td className="tg-cly1" key={Math.random()}>
                    <div className="line" />
                  </td>
                );
              })}
            </tr>
          );
        })}

      </tbody>
    </table>
  );
};

export default TableSkeleton;
