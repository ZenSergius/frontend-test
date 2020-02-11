import React from 'react';
import {useDispatch} from 'react-redux';
import actions from '../actions';


const CreateRow = (props) => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        let form = event.target;
        let formData = new FormData(form);
        let rowName = String(formData.get('name')).trim();
        let rowValue = formData.get('value');

        if (rowName) {
            let row = {'name': rowName, 'value': null !== rowValue ? rowValue : ''};
            dispatch(actions.createNewRow(row));
        }

        props.handleClick(false);
        event.preventDefault();
    }

    const handleClose = () => {
        props.handleClick(false);
    }
    
    return (<tr>
                <td colSpan={4}>
                    <form onSubmit={handleSubmit}>
                        <input name='name' placeholder='name' className="w-30" ></input>
                        <input name='value' placeholder='value' className="w-30" ></input>
                        <div className="wrap-actions-btn">
                            <button className="main" type="submit">Save</button> 
                            <button  onClick={handleClose}>Close</button>
                        </div>
                    </form>
                </td>
            </tr>);
};

export default CreateRow;