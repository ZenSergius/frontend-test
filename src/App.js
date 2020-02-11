import React from 'react';
import Table from './components/Table';
import TableData from './components/TableData';
import TableFile from './components/TableFile';

const App = () => {
    return (<div>
                <TableFile/>
                <Table/>
                <TableData />
            </div>);
};
export default App;
