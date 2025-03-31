import React from 'react';
import Subtitle from '../components/Subtitle';
import Table from '../components/Table';

const Borrow: React.FC = () => {
  const tableData = [
    { "Loan Asset": 'Alice', "Colleteral Asset": 28, "Your Borrow": 'Engineer', "Your LTV/LLTV": '$100K', "Liquidity": 'NY', "Borrow APY": 'Active' },
    { "Loan Asset": 'Bob', "Colleteral Asset": 34, "Your Borrow": 'Designer', "Your LTV/LLTV": '$90K', "Liquidity": 'LA', "Borrow APY": 'Inactive' },
    { "Loan Asset": 'Charlie', "Colleteral Asset": 30, "Your Borrow": 'PM', "Your LTV/LLTV": '$110K', "Liquidity": 'SF', "Borrow APY": 'Active' },
    { "Loan Asset": 'David', "Colleteral Asset": 26, "Your Borrow": 'QA', "Your LTV/LLTV": '$85K', "Liquidity": 'Seattle', "Borrow APY": 'Active' },
  ];

  return (
    <div className="page-container">
      <Subtitle text="Welcome to Compound Blue - Borrow Section" />
      <Table data={tableData} />
    </div>
  );
};

export default Borrow;
