import { setValueToLocalStorage } from '../store/localStorageHelpers';
import dataTable from '../dataTable';

export default function table(state = dataTable, action)
{
    let newState;
    switch (action.type) {
        case 'TABLE':
            setValueToLocalStorage('table', action.table)
            return action.table;
            break;

        case 'SAVE_EDITED_ROW':
            newState = [...state];
            newState[action.index] = action.row;
            setValueToLocalStorage('table', newState);
            return newState;
            break;

        case 'CREATE_ROW':
            newState = [...state];
            newState.push(action.row);
            setValueToLocalStorage('table', newState);
            return newState;

        case 'DELETE_ROW':
            newState = [...state];
            newState.splice(action.index, 1);
            setValueToLocalStorage('table', newState);
            return newState;

        case 'IMPORT_TABLE':
            newState = action.table;
            setValueToLocalStorage('table', newState);
            return newState;
        

        default:
            break;
    }
    return state;

}
