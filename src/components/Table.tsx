import React, { useState } from 'react';
import TableRow from './TableRow';
import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

interface TableProps {
  data: { [key: string]: string | number }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';

    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sortedArray = [...sortedData].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setSortedData(sortedArray);
    setSortConfig({ key, direction });
  };

  return (
    <table className="styled-table">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key} className="table-header" onClick={() => handleSort(key)}>
              {key} {sortConfig?.key === key ? (<FontAwesomeIcon icon={sortConfig.direction === 'asc' ? faSortUp : faSortDown} />) : ''}
            </th>))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <TableRow key={index} row={row} />
        ))}
      </tbody>
    </table>  
  );
};

export default Table;
