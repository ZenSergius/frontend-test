import React from 'react';
import {useSelector} from 'react-redux';
import Thead from './Thead';
import Tbody from './Tbody';

const Table = () => {
    const dataTable = useSelector(state => state.table);

    return (<table>
                <Thead />
                <Tbody />
            </table>);
};

export default Table;