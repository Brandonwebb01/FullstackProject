import React, { useEffect, useState } from "react";
import './ItemEditForm.css';
import Button from "../Button/Button";

const EditForm = props => {
    const [id, setID] = useState('');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');
    const [entry, setEntry] = useState({});

    useEffect(() => {
        setID(props.entry.item_id);
        setValue1(props.entry.value1);
        setValue2(props.entry.value2);
        setValue3(props.entry.value3);
        setValue4(props.entry.value4);
        setValue5(props.entry.value5);
        setValue6(props.entry.value6);
    }, [props]);

    const _detectValue1TextChanged = (key, value) => {
        setValue1(value);
        console.log("_detectValue1TextChanged event fired");
    }
    const _detectValue2TextChanged = (key, value) => {
        setValue2(value);
        console.log("_detectValue2TextChanged event fired");
    }
    const _detectValue3TextChanged = (key, value) => {
        setValue3(value);
        console.log("_detectValue3TextChanged event fired");
    }
    const _detectValue4TextChanged = (key, value) => {
        setValue4(value);
        console.log("_detectValue4TextChanged event fired");
    }
    const _detectValue5TextChanged = (key, value) => {
        setValue5(value);
        console.log("_detectValue5TextChanged event fired");
    }
    const _detectValue6TextChanged = (key, value) => {
        setValue6(value);
        console.log("_detectValue6TextChanged event fired");
    }

    useEffect(() => {
        setEntry({ 'id': id, 'category_id': value1, 'title': value2, 'description': value3, 'price': value4, 'quantity': value5, 'sku': value6 });
        console.log("setEntry Changed");
    }, [id, value1, value2, value3, value4, value5, value6]);

    const _edit = () => {
        console.log("EditForm _edit triggered");
        props.onEditEntry(entry);
        _clear();
    }

    const _clear = () => {
        setEntry({});
        setID(''); setValue1(''); setValue2(""); setValue3(""); setValue4(""); setValue5(""); setValue6("");
        console.log("_clear event fired");
    }

    return (
        <div className="Form" style={{ marginTop: '16px' }}>
            <Button onclick={_edit} title="Save Entry" />
            <br />
            <label>Category ID:</label>
            <input type="text" placeholder="Category ID" value={value1}
                onChange={e => _detectValue1TextChanged('category_id', e.target.value)} />
            <br />
            <label>Title:</label>
            <input type="text" placeholder="Title" value={value2}
                onChange={e => _detectValue2TextChanged('title', e.target.value)} />
            <br />
            <label>Description:</label>
            <input type="text" placeholder="Description" value={value3}
                onChange={e => _detectValue3TextChanged('description', e.target.value)} />
            <br />
            <label>Price:</label>
            <input type="text" placeholder="Price" value={value4}
                onChange={e => _detectValue4TextChanged('price', e.target.value)} />
            <br />
            <label>Quantity:</label>
            <input type="text" placeholder="Quantity" value={value5}
                onChange={e => _detectValue5TextChanged('quantity', e.target.value)} />
            <br />
            <label>Sku:</label>
            <input type="text" placeholder="Sku" value={value6}
                onChange={e => _detectValue6TextChanged('sku', e.target.value)} />
        </div>
    );
}
export default EditForm;