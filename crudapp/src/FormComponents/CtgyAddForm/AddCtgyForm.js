import React, {useEffect, useState} from "react";
import './AddCtgyForm.css';
import Button from "../Button/Button";

const CtgyAddForm = props => {
    const [value1, setValue1] = useState('');
    const [entry, setEntry] = useState({});

    const _detectValue1TextChanged = (key, value) => {
        setValue1(value);
        console.log("_detectValue1TextChanged event fired");
    }

    useEffect( () => {
        setEntry({'name':value1});
        console.log("setEntry Changed");
    }, [value1]);

    const _add = () => {
        console.log("AddForm _add triggered");
        props.onAddEntry(entry);
        _clear();
    }

    const _clear = () => {
        setEntry({});
        setValue1('');
        console.log("_clear event fired");
    }

    return(
        <div className="Form" style={ {marginTop:'16px'} }>
            <Button onclick={ _add } title="Add Entry" />
            <br />
            <label>Value 1:</label>
            <input type="text" placeholder="Value 1" value={ value1 } 
              onChange={ e => _detectValue1TextChanged('name', e.target.value) } />
            <br />
            </div>
    );
}
export default CtgyAddForm;