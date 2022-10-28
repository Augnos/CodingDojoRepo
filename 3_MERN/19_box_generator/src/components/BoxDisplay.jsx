const BoxDisplay = (props) => {
    // destructuring box props
    const { allBoxes } = props;

    return (
        // container and styling
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        }}> {

            // allBoxes is mapped and each box is created with respective color an size attributes
                allBoxes.map((box) => {
                    return (

                        // box styling
                        <div style={{
                            backgroundColor: box.color,
                            border: "2px, solid, black",
                            width: box.size + "px",
                            height: box.size + "px",
                            margin: "1rem",
                        }}>
                            <p>{box.color}</p>


                        </div>
                    )

                })
            }</div>
    );
};

export default BoxDisplay;