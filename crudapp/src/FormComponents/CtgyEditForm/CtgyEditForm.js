import React, { useEffect, useState } from "react";
import './CtgyEditForm.css';
import Button from "../Button/Button";

const CtgyEditForm = props => {
    const [id, setID] = useState('');
    const [value1, setValue1] = useState('');
    const [entry, setEntry] = useState({});

    useEffect(() => {
        setID(props.entry.categories_id);
        setValue1(props.entry.value1);
    }, [props]);

    const _detectValue1TextChanged = (key, value) => {
        setValue1(value);
        console.log("_detectValue1TextChanged event fired");
    }

    useEffect(() => {
        setEntry({ 'id': id, 'name': value1 });
        console.log("setEntry Changed");
    }, [id, value1]);

    const _edit = () => {
        console.log("EditForm _edit triggered");
        props.onEditEntry(entry);
        _clear();
    }

    const _clear = () => {
        setEntry({});
        setID(''); setValue1('');
        console.log("_clear event fired");
    }

    return (
        <div className="Form" style={{ marginTop: '16px' }}>
            <Button onclick={_edit} title="Save Entry" />
            <br />
            <label>Name:</label>
            <input type="text" placeholder="Name" value={value1}
                onChange={e => _detectValue1TextChanged('name', e.target.value)} />
            <br />
        </div>
    );
}
export default CtgyEditForm;