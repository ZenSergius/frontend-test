import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../actions';

const TableData = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.table);
    const [importValue, setImportValue] = useState();
    const [exportValue, setExportValue] = useState(null);
    const [mistake, setMistake] = useState(null);

    const isJson = (str) => {
        try { 
            return (!!str && JSON.parse(str)); 
        } catch (e) { 
            setMistake("Value must be in Json format"); 
            return false;
        } 
    };

    const handleChange = (e) => {
        setExportValue(null);
        setImportValue(e.target.value);
        
    };
    
    const handleSubmit = (e) => {

        if(isJson(importValue)){
            setMistake(null);
            dispatch(actions.importTable(isJson(importValue)));
        } 
        
        e.preventDefault();
    }

    const handeleExport = (e) => {
        const value = JSON.stringify(data);
        setExportValue(value);
        e.preventDefault();
    };

    return (<form onSubmit={e => handleSubmit(e)} className="upload-area-wrapper">
                {(null !== mistake) ? <div>{mistake}</div> : ''}
                <textarea 
                    onChange={e => handleChange(e)}
                    cols={40} rows={10} 
                    value={(null !== exportValue) ? exportValue : importValue}
                ></textarea>
                <div className="wrap-btn">
                    <button  className="main" type="submit">Import</button>
                    <button className="main" onClick={e => handeleExport(e)}>Export</button>
                </div>
            </form>);
};

export default TableData;