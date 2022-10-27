import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';

const appStyle = {
    "background-color": "#dddddd",
}


function App() {
    return (
        <div className="App container-fluid pt-3" style={appStyle}>
            <div className='row'>
                <Header />
            </div>
            <div className='row justify-content-between'>

                <div className='col-3 m-3'>
                    <Navigation />
                </div>

                <Main>

                    <div className='row py-3'>
                        <div className='col-4'><SubContents /></div>
                        <div className='col-4'><SubContents /></div>
                        <div className='col-4'><SubContents /></div>
                    </div>
                    <div className='row p-3'>
                        <Advertisement />
                    </div>
                </Main>
            </div>
        </div>
    );
}

export default App;
