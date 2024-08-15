import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './containers/LandingPage';

function App() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="text-center">
                <LandingPage/>
            </div>
        </div>
    )
}

export default App