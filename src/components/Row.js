import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import actions from '../actions';


const Row = (props) => {
    const dispatch = useDispatch();
    
    return (<tr>
                <td className="w-10">{props.index + 1}</td>
                {Object.values(props.item).map((prop) => <td className="w-30" key={prop}>{prop}</td>)}
                <td className="w-30" >
                    <div className="wrap-btn">
                        <button className="main" onClick={e => dispatch(actions.setEditedRow(props.index))}>Edit</button>
                        <button className="error" onClick={e => dispatch(actions.deleteRow(props.index))}>Delete</button>
                    </div>
                </td>
            </tr>);
};

export default Row;