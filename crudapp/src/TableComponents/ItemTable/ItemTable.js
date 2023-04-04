import React, { useState } from 'react';
import ItemTableRow from '../ItemTableRow/ItemTableRow';
import ItemAddForm from '../../FormComponents/ItemAddForm/ItemAddForm';
import ItemEditForm from "../../FormComponents/ItemEditForm/ItemEditForm";
import './ItemTable.css';

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
    }

    return (
        <div className="Table">
            <table style={{ marginTop: '16px' }} border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>sku</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.entries.map(
                            (entry, index) => (
                                <ItemTableRow index={index} entry={entry} key={index} onEditEntry={_editEntry} onDeleteEntry={_deleteEntry} />
                            )
                        )
                    }
                </tbody>
            </table>
            {editing ? (
                <ItemEditForm onEditEntry={_updateEntry} entry={props.selectedEntry} />
            ) : (
                <ItemAddForm onAddEntry={_addEntry} />
            )}
        </div>
    );
}
export default Table;