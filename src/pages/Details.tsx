import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Subtitle from '../components/Subtitle';
import './Details.css';
import Card from '../components/Card'
import CardContainer from '../components/CardContainer';
import Table from '../components/Table';

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const tableData = [
    { "Loan Asset": 'Alice', "Curator": 28, "Supply Share": 'Engineer', "Total Supply": '$100K' },
    { "Loan Asset": 'Bob', "Curator": 34, "Supply Share": 'Designer', "Total Supply": '$90K' },
    { "Loan Asset": 'Charlie', "Curator": 30, "Supply Share": 'PM', "Total Supply": '$110K' },
    { "Loan Asset": 'David', "Curator": 26, "Supply Share": 'QA', "Total Supply": '$85K' },
  ];

  return (
    <div className="details-page">
      <Subtitle text={`Details for ID: ${id}`} />

      <p className="details-text">
        This is the details page for the selected item. The ID is <strong>{id}</strong>.
      </p>
      <div className="details-container">
        <div className="details-column">
          <CardContainer title="Key Matrics">
            <p>
              test
            </p>
          </CardContainer>
          <CardContainer title="Vault Allocation">
            <Table data={tableData} />
          </CardContainer>
          <CardContainer title="Interest Rate Model">
            <p>
              test
            </p>
          </CardContainer>
          <CardContainer title="Market Info">
            <p>
              test
            </p>
          </CardContainer>
        </div>
        <div className="details-column">
          <Card>
            <p>
              position summary
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Details;
