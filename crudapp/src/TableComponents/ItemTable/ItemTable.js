import React from "react";
import ItemTableRow from '../ItemTableRow/ItemTableRow';
import ItemAddForm from '../../FormComponents/ItemAddForm/ItemAddForm';
import './ItemTable.css';

const Table = props => {

    const _editEntry = entry => {
        console.log("Table _editEntry triggered");
        props.onEditEntry(entry);
    }

    const _deleteEntry = entry => {
        console.log("Table _deleteEntry triggered");
        console.log(entry);
        props.deleteEntry(entry);
    }

    const _addEntry = entry => {
        console.log("Table _addEntry triggered");
        props.addEntry(entry);
    }

    return(
        <div className="Table">
            <table style={{ marginTop:'16px' }} border="1">
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
                                <ItemTableRow index={ index } entry={ entry } key={ index } onEditEntry={ _editEntry } onDeleteEntry={ _deleteEntry } />
                            )
                        )
                    }
                </tbody>
            </table>
            {
                <ItemAddForm onAddEntry={ _addEntry } />
            }
        </div>
    );
}
export default Table;