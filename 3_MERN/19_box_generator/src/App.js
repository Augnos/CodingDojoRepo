/* Box Generator

Create a component with a form inside which accepts a color. When the form is submitted, add a box to the set of boxes with the appropriate color. You may use whichever method of styling you prefer; refer back to the end of the previous module (React Components) for more information on styling. The boxes should appear next to one another and wrap around if needed. */

import './App.css';
import BoxForm from './components/BoxForm';

function App() {
    return (
        <div className='App' style={{margin: '10px'}}>
            <BoxForm />
        </div>
    );
}

export default App;
