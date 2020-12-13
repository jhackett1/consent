import React from "react"

export const ProjectSkeleton = () =>
  <div className="ct-skeleton ct-skeleton--project">
    <div></div>
    <div></div>
  </div>

export const TableSkeleton = ({
  columns
}) =>
  <table className="ct-table ct-skeleton ct-skeleton--table">
    <thead>
      <tr>
        {columns.map((col, i) =>
          <th key={i}>{col}</th>
        )}
      </tr>
    </thead>
    <tbody>
      <tr>
        {columns.map((col, i) =>
          <td key={i}><div></div></td>
        )}
      </tr>
      <tr>
        {columns.map((col, i) =>
          <td key={i}><div></div></td>
        )}
      </tr>
      <tr>
        {columns.map((col, i) =>
          <td key={i}><div></div></td>
        )}
      </tr>
    </tbody>
  </table>