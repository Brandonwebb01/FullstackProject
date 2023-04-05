import React, { useEffect, useState } from "react";
import './AddCtgyForm.css';
import Button from "../Button/Button";

const CtgyAddForm = props => {
    const [name, setName] = useState('');
    const [entry, setEntry] = useState({});

    const _detectName1TextChanged = (key, value) => {
        setName(value);
        console.log("_detectNameTextChanged event fired");
    }

    useEffect(() => {
        setEntry({ 'name': name });
        console.log("setEntry Changed");
    }, [name]);

    const _add = () => {
        console.log("AddForm _add triggered");
        props.onAddEntry(entry);
        _clear();
    }

    const _clear = () => {
        setEntry({});
        setName('');
        console.log("_clear event fired");
    }

    return (
        <div className="Form" style={{ marginTop: '16px' }}>
            <Button onclick={_add} title="Add Entry" />
            <br />
            <label>Name:</label>
            <input type="text" placeholder="Name" value={name}
                onChange={e => _detectName1TextChanged('name', e.target.value)} />
            <br />
        </div>
    );
}
export default CtgyAddForm;