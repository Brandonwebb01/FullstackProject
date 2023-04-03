import React from "react";
import ItemTableRow from '../ItemTableRow/ItemTableRow';
import './ItemTable.css';

const Table = props => {

    const _editEntry = entry => {
        console.log("Table _editEntry triggered");
        props.onEditEntry(entry);
    }

    const _deleteEntry = entry => {
        console.log("Table _deleteEntry triggered");
        props.onDeleteEntry(entry);
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

        </div>
    );
}
export default Table;