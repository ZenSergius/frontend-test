import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../actions';

const TableData = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.table);
    
    const exportToFile = () => {
        
        return "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));

    }

    const isJson = (str) => {
        try { 
            return (!!str && JSON.parse(str)); 
        } catch (e) { 
            console.log("please, upload Json file");
            return false;
        } 
    };

    const importFile = (e, files) => {
        let reader = new FileReader();
        reader.readAsText(files[0]);
        reader.onload = () => {
            dispatch(actions.importTable((isJson(reader.result)))); 
        };
    }

    return ( <div className="upload-file-wrapper">
                <input onChange={e => importFile(e, e.target.files)} type="file" accept='.json'></input>
                <a href={exportToFile()} download="data.json">Export to file</a>
            </div>);
};

export default TableData;