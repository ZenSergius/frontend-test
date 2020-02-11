import { createStore, combineReducers } from 'redux';
import {getValueFromLocalStorage, setValueToLocalStorage} from './localStorageHelpers'
import table from "../reducers/table";
import dataTable from '../dataTable';
import editedRow from '../reducers/editedRow';


const tableFromLocalStorage = getValueFromLocalStorage('table', true);
const editedRowFromLocalStorage = getValueFromLocalStorage('editedRow');


export default () => {
    return {
        store: createStore(
            combineReducers({
                'table': table,
                'editedRow': editedRow
            }),
            {
                'table': null !== tableFromLocalStorage ? tableFromLocalStorage : dataTable,
                'editedRow': null !== editedRowFromLocalStorage ? editedRowFromLocalStorage : null
            }
        )
    }
};
