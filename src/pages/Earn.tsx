import React from 'react';
import Subtitle from '../components/Subtitle';
import Table from '../components/Table';
import CardContainer from '../components/CardContainer';

const Earn: React.FC = () => {
  const tableData = [
    { "Vault Name": 'Alice', Your_Deposits: 28, "Total Deposits": 'Engineer', Liquidity: '$100K', Collateral: 'NY', "Supply APY": 'Active' },
    { "Vault Name": 'Bob', Your_Deposits: 34, "Total Deposits": 'Designer', Liquidity: '$90K', Collateral: 'LA', "Supply APY": 'Inactive' },
    { "Vault Name": 'Charlie', Your_Deposits: 30, "Total Deposits": 'PM', Liquidity: '$110K', Collateral: 'SF', "Supply APY": 'Active' },
    { "Vault Name": 'David', Your_Deposits: 26, "Total Deposits": 'QA', Liquidity: '$85K', Collateral: 'Seattle', "Supply APY": 'Active' },
  ];

  return (
    <div className="page-container">
      <Subtitle text="Welcome to Danji - Earn Section" />
      <CardContainer>
        <Table data={tableData} />
      </CardContainer>
    </div>
  );
};

export default Earn;
