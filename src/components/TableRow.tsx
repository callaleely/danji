import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TableRow.css';

interface TableRowProps {
  row: { [key: string]: string | number };
}

const TableRow: React.FC<TableRowProps> = ({ row }) => {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate(`/details/${row.Name}`); // You can use any unique identifier here
  };

  return (
    <tr className="table-row" onClick={handleRowClick}>
      {Object.values(row).map((value, index) => (
        <td key={index} className="table-cell">{value}</td>
      ))}
    </tr>
  );
};

export default TableRow;
