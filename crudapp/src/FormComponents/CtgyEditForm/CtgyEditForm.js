import React, { useEffect, useState } from "react";
import './CtgyEditForm.css';
import Button from "../Button/Button";

const CtgyEditForm = props => {
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [entry, setEntry] = useState({});

    useEffect(() => {
        setID(props.entry.categories_id);
        setName(props.entry.name);
    }, [props]);

    const _detectNameTextChanged = (key, value) => {
        setName(value);
        console.log("_detectNameTextChanged event fired");
    }

    useEffect(() => {
        setEntry({ 'id': id, 'name': name });
        console.log("setEntry Changed");
    }, [id, name]);

    const _edit = () => {
        console.log("EditForm _edit triggered");
        props.onEditEntry(entry);
        _clear();
    }

    const _clear = () => {
        setEntry({});
        setID(''); setName('');
        console.log("_clear event fired");
    }

    return (
        <div className="Form" style={{ marginTop: '16px' }}>
            <Button onclick={_edit} title="Save Entry" />
            <br />
            <label>Name:</label>
            <input type="text" placeholder="Name" value={name}
                onChange={e => _detectNameTextChanged('name', e.target.value)} />
            <br />
        </div>
    );
}
export default CtgyEditForm;