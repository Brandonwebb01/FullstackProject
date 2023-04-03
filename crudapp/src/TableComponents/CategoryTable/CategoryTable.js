import React from "react";
import CategoryTableRow from '../CategoryTableRow/CategoryTableRow';
import CtgyAddForm from '../../FormComponents/CtgyAddForm/AddCtgyForm';
import './CategoryTable.css';


const Table = props => {

    const _editEntry = entry => {
        console.log("Table _editEntry triggered");
        props.onEditEntry(entry);
    }

    const _deleteEntry = entry => {
        console.log("Table _deleteEntry triggered");
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
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.entries.map(
                            (entry, index) => (
                                <CategoryTableRow index={ index } entry={ entry } key={ index } onEditEntry={ _editEntry } onDeleteEntry={ _deleteEntry } />                   
                            )
                        )
                    }
                </tbody>
            </table>
            {
                <CtgyAddForm onAddEntry={ _addEntry } />
            }
        </div>
    );
}
export default Table;