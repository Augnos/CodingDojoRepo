import React, { useState } from "react";
import BoxDisplay from "./BoxDisplay";


const BoxForm = () => {
    // Defining state variables
    const [color, setColor] = useState("");
    const [size, setSize] = useState(200);
    const [allBoxes, setAllBoxes] = useState([]);

    // handler methods for form inputs
    const colorHandler = (e) => {
        setColor(e.target.value);
    }
    const sizeHandler = (e) => {
        setSize(e.target.value);
    }

    // handler method for form submission
    const submitHandler = (e) => {
        e.preventDefault();

        // new box is defined by color and size
        const newBox = {
            color: color,
            size: size,
        };

        // all boxes state is updated with previous spread, plus new box
        // resets inputs in form to their original values
        setAllBoxes([...allBoxes, newBox]);
        setColor("");
        setSize(200);

    };

    return (
        <>
            <form onSubmit={submitHandler} >

                {/* color input section */}
                <div>
                    <label htmlFor="colorInput">Box Color: </label>
                    <input type="text" name="colorInput" value={color} onChange={colorHandler} />
                </div>

                {/* size input section */}
                <div>
                    <label htmlFor="sizeInput">Box size: </label>
                    <input type="text" name="sizeInput" value={size} onChange={sizeHandler} />
                </div>

                <button type="submit">Add Box</button>
            </form>

            {/* display component brought in here with all box attributes */}
            <BoxDisplay allBoxes={allBoxes} />
        </>
    );
};

export default BoxForm;