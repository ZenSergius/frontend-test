const setTable = (table) => {
    return {
        type: "TABLE",
        table: table
    }
};

const setEditedRow = (index) => {
    return {
        type: "EDITED_ROW",
        index: index
    }
};

const saveEditedRow = (index, row) => {
    return {
        type: "SAVE_EDITED_ROW",
        index: index,
        row: row
    }
}

const createNewRow = (row) => {
    return {
        type: "CREATE_ROW",
        row: row
    }
};

const deleteRow = (index) => {
    return {
        type: 'DELETE_ROW',
        index: index
    }
};

const importTable = (table) => {
    return {
        type: 'IMPORT_TABLE',
        table: table
    }
}

export default {
    setTable, 
    setEditedRow,
    saveEditedRow,
    createNewRow,
    deleteRow,
    importTable
};
