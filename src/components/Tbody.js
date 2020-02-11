import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import actions from '../actions';
import Row from './Row';
import RowEdited from './RowEdited';
import CreateRow from './CreateRow';


const Tbody = () => {
    const dispatch = useDispatch();
    const dataTable = useSelector(state => state.table);
    const editIndex = useSelector(state => state.editedRow);
    const [createRow, setCreateRow] = useState(false);

    const handleClick = (action) => {
        if (true === action && null !== editIndex) {
            dispatch(actions.setEditedRow(null));
        }
        setCreateRow(action);
    };

    return (<tbody>
                {(dataTable.length > 0) 
                ? dataTable.map((item, index) => 
                    { return (null !== editIndex && index === editIndex) 
                                ? <RowEdited key={item.name} item={item} index={index}/>
                                : <Row key={item.name} item={item} index={index}/>}): ""}
                {(createRow === false) 
                    ? <tr><td colSpan={4}><button className="main" onClick={e => handleClick(true)}>Create</button></td></tr>
                    : <CreateRow handleClick={handleClick}/>}
            </tbody>);
};

export default Tbody;