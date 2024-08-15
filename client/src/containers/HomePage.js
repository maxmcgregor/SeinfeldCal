import React from "react";
import Button from "react-bootstrap/Button";

const HomePage = ({handleLogin}) => {
    
    const quickLogout = () => {
        handleLogin();
    }
    
    return (
        <>
        <p>This is the homepage</p>
            <Button variant='danger' onClick={quickLogout}>Quick logout for dev purposes</Button>
        </>
    )
}

export default HomePage;