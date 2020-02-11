import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import actions from '../actions';


const RowEdited = (props) => {
    const dispatch = useDispatch();
    const editIndex = useSelector(state => state.editedRow);
    const item = props.item;
    const [valueForm, setvalueForm] = useState({});
    

    const handleChange = (e, prop) => {
        valueForm[prop] = e.target.value
        setvalueForm(valueForm);
    }
    
    const handleSubmit = (event) => {

        let newState = Object.assign({}, item);
        for(let property in newState){
            if(valueForm.hasOwnProperty(property)){
                newState[property] = valueForm[property];
            }
        }

        dispatch(actions.saveEditedRow(editIndex, newState));
        dispatch(actions.setEditedRow(null));

        event.preventDefault();
    }

    const handleClose = () => {
        dispatch(actions.setEditedRow(null));
    }
    
    return (<tr>
                <td className="w-10">{props.index + 1}</td>
                <td colSpan={3}>
                    <form onSubmit={handleSubmit}>
                        {Object.keys(item).map((prop) => {
                            return <input 
                                        key={prop} 
                                        value={valueForm[prop]}  
                                        defaultValue={item[prop]} 
                                        onChange={e => handleChange(e, prop)} 
                                        className="w-30">
                                    </input>})}
                        <div className="wrap-actions-btn">
                            <button className="main" type="submit" >Save</button> 
                            <button className="default" onClick={handleClose}>Close</button>
                        </div>
                    </form>
                </td>
            </tr>);
};

export default RowEdited;