import { useState } from "react";

const ItemForm = (props) => {
    const [enteredId, setEnteredId] = useState("");
    const [enteredName, setEnteredName] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");

    const idChangeHandler = (event) => {
        setEnteredId(event.target.value)
    }
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }
    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value)
    }

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value)
    }

    const addItemHandler = (event) => {
        event.preventDefault();
        props.onAddItem(enteredId,enteredName, enteredDescription, enteredPrice);
        setEnteredId("")
        setEnteredName("")
        setEnteredDescription("")
        setEnteredPrice("")
    }

    return (
        <>
            <h2>Add Item</h2>
            <form onSubmit={addItemHandler}>
                <label htmlFor="id">Candy ID :-</label>
                <input type="number" id="id" value={enteredId} onChange={idChangeHandler} ></input>
                <label htmlFor="name">Candy Name :-</label>
                <input type="text" id="name" value={enteredName} onChange={nameChangeHandler} ></input>
                <label htmlFor="description">Description:-</label>
                <input type="text" id="description" value={enteredDescription} onChange={descriptionChangeHandler} ></input>
                <label htmlFor="price">price :-</label>
                <input type="number" id="price" value={enteredPrice} onChange={priceChangeHandler} ></input>
                <button type="submit">Add Candy</button>
            </form>
        </>
    )
}
export default ItemForm;