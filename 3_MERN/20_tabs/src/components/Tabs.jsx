import React, { useState } from "react";

const Tabs = (props) => {
    // destructuring the individual tab objects
    const { tabs } = props;
    const [clicked, setClicked] = useState(0);

    const clickHandler = (index) => {
        setClicked(index);
    }


    return (
        <div className="container pt-3">

            {/* generates tab buttons with labels */}
            <div className="row w-50 mx-auto justify-content-evenly pb-3">
                {
                    tabs.map(
                        (element, index) => {
                            return (
                                <button onClick={() => clickHandler(index)}
                                    className="col mx-3"
                                    value={element.label}
                                    >
                                        {element.label}
                                    </button>
                            )
                        }
                    )
                }
            </div>

            {/* generates textarea box with tab's content */}
            <div className="row w-50 mx-auto">
                    <textarea
                        type="text"
                        value={tabs[clicked].content}
                        className="text-primary"></textarea>
            </div>
        </div>
    )
}

export default Tabs;