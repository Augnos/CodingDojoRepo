import { Routes, Route, Link } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Edit from './views/Edit';

function App() {
    return (
        <div className="App">
            <Link to="/">Home</Link>
            <Routes>
                <Route element={<Main />} path="/" />
                <Route element={<Detail />} path="/:id" />
                <Route element={<Edit/>} path="/products/:id/edit"/>
            </Routes>
        </div>
    );
}

export default App;
