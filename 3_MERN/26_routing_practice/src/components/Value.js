import { useParams } from "react-router-dom";

const Value = (props) => {
    const { value } = useParams();
    const { color } = useParams();
    const { bgcolor } = useParams();

    return (
        <>
            {isNaN(value) ?
                <h1 style={{ color: color, backgroundColor: bgcolor }}>The word is: {value}</h1> :
                <h1 style={{ color: color, backgroundColor: bgcolor }}>The number is: {value}</h1>
            }
        </>
    );
}

export default Value;