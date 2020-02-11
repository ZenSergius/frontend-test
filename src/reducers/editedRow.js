import { setValueToLocalStorage } from '../store/localStorageHelpers';


export default function editedRow(state = null, action)
{
    switch (action.type) {
        case 'EDITED_ROW':
            setValueToLocalStorage('editedRow', action.index)
            return action.index;
            break;

        default:

    }
    return state;

}