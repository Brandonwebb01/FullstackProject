import React, { useState } from 'react';
import CategoryTableRow from '../CategoryTableRow/CategoryTableRow';
import CtgyAddForm from '../../FormComponents/CtgyAddForm/AddCtgyForm';
import CtgyEditForm from "../../FormComponents/CtgyEditForm/CtgyEditForm";
import './CategoryTable.css';


const Table = props => {
    
    const [editing, setEditing] = useState(false);

    const _editEntry = entry => {
        console.log("Table _editEntry triggered");
        props.editEntry(entry);
        setEditing(true);
    }

    const _deleteEntry = entry => {
        console.log("Table _deleteEntry triggered");
        props.deleteEntry(entry);
    }

    const _addEntry = entry => {
        console.log("Table _addEntry triggered");
        props.addEntry(entry);
    }

    const _updateEntry = entry => {
        console.log("Table _updateEntry triggered");
        props.updateEntry(entry);
        console.log(entry);
        setEditing(false);
    }

    return (
        <div className="Table">
            <table style={{ marginTop: '16px' }} border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.entries.map(
                            (entry, index) => (
                                <CategoryTableRow index={index} entry={entry} key={index} onEditEntry={_editEntry} onDeleteEntry={_deleteEntry} />
                            )
                        )
                    }
                </tbody>
            </table>
            {editing ? (
                <CtgyEditForm onEditEntry={_updateEntry} entry={props.selectedEntry} />
            ) : (
                <CtgyAddForm onAddEntry={_addEntry} />
            )}
        </div>
    );
}
export default Table;