import React from 'react';
import Button from 'react-bootstrap/Button';

const LoginForm = ( {handleLogin} ) => {
    
    const handleNotYetClick = () => {
        alert('Not yet button clicked, we can deal with this later');
    }
    const handleYesClick = () => {
        handleLogin();
        alert('You are magically logged in');
    }
    
    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <h5>Do you have an account?</h5>
            <Button variant="secondary" size="lg" onClick={handleNotYetClick}>
                Not Yet
            </Button>
            {' '}
            <Button variant="success" size="lg" onClick={handleYesClick}>
                Yes
            </Button>
        </div>
    );
}

export default LoginForm;