import React, { useEffect, useState } from "react";
import './ItemEditForm.css';
import Button from "../Button/Button";

const EditForm = props => {
    const [id, setID] = useState('');
    const [categoryid, setCategoryid] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sku, setSku] = useState('');
    const [entry, setEntry] = useState({});

    useEffect(() => {
        setID(props.entry.item_id);
        setCategoryid(props.entry.categoryid);
        setTitle(props.entry.title);
        setDescription(props.entry.description);
        setPrice(props.entry.price);
        setQuantity(props.entry.quantity);
        setSku(props.entry.sku);
    }, [props]);

    const _detectCategoryidTextChanged = (key, value) => {
        setCategoryid(value);
        console.log("_detectCategoryidTextChanged event fired");
    }
    const _detectTitleTextChanged = (key, value) => {
        setTitle(value);
        console.log("_detectTitleTextChanged event fired");
    }
    const _detectDescriptionTextChanged = (key, value) => {
        setDescription(value);
        console.log("_detectDescriptionTextChanged event fired");
    }
    const _detectPriceTextChanged = (key, value) => {
        setPrice(value);
        console.log("_detectPriceTextChanged event fired");
    }
    const _detectQuantityTextChanged = (key, value) => {
        setQuantity(value);
        console.log("_detectQuantityTextChanged event fired");
    }
    const _detectSkuTextChanged = (key, value) => {
        setSku(value);
        console.log("_detectSkuTextChanged event fired");
    }

    useEffect(() => {
        setEntry({ 'id': id, 'category_id': categoryid, 'title': title, 'description': description, 'price': price, 'quantity': quantity, 'sku': sku });
        console.log("setEntry Changed");
    }, [id, categoryid, title, description, price, quantity, sku]);

    const _edit = () => {
        console.log("EditForm _edit triggered");
        props.onEditEntry(entry);
        _clear();
    }

    const _clear = () => {
        setEntry({});
        setID(''); setCategoryid(''); setTitle(""); setDescription(""); setPrice(""); setQuantity(""); setSku("");
        console.log("_clear event fired");
    }

    return (
        <div className="Form" style={{ marginTop: '16px' }}>
            <Button onclick={_edit} title="Save Entry" />
            <br />
            <label>Category Name:</label>
            <select value={categoryid} onChange={e => _detectCategoryidTextChanged('category_id', e.target.value)}>
                <option value="">Select a category</option>
                {props.categories.map(category => (
                    <option key={category.categories_id} value={category.categories_id}>{category.name}</option>
                ))}
            </select>
            <br />
            <label>Title:</label>
            <input type="text" placeholder="Title" value={title}
                onChange={e => _detectTitleTextChanged('title', e.target.value)} />
            <br />
            <label>Description:</label>
            <input type="text" placeholder="Description" value={description}
                onChange={e => _detectDescriptionTextChanged('description', e.target.value)} />
            <br />
            <label>Price:</label>
            <input type="text" placeholder="Price" value={price}
                onChange={e => _detectPriceTextChanged('price', e.target.value)} />
            <br />
            <label>Quantity:</label>
            <input type="text" placeholder="Quantity" value={quantity}
                onChange={e => _detectQuantityTextChanged('quantity', e.target.value)} />
            <br />
            <label>Sku:</label>
            <input type="text" placeholder="Sku" value={sku}
                onChange={e => _detectSkuTextChanged('sku', e.target.value)} />
        </div>
    );
}
export default EditForm;