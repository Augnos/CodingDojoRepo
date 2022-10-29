import React, { useState } from "react";

const Tabs = (props) => {
    // destructuring the individual tab objects
    const { tabProps } = props;
    const [clicked, setClicked] = useState(0);

    tabClickHandler = (e, value) => {
        setClicked(tabID);
    }

    return (
        <div className="container pt-3">

            {/* generates tab buttons with labels */}
            <div className="row w-50 mx-auto justify-content-evenly pb-3">
                {
                    tabProps.map(
                        tab => {
                            return (
                                <button className="col mx-3" onClick={tabClickHandler(tabID)}>{tab.label}</button>
                            )
                        }
                    )
                }
            </div>

            {/* generates textarea box with tab's content */}
            <div className="row w-50 mx-auto">
                {
                    tabProps.map(
                        tab => {
                            return (
                                <textarea>{tab.content}</textarea>
                            )
                        }
                    )
                }
            </div>
        </div>
    )



}

export default Tabs;