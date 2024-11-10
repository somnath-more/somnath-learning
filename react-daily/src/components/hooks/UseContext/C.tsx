import React from 'react';
import useUserContext from './CustomHook';
import Button from '../../atoms/Button';

const C = () => {
    const { name, email, onForgot } = useUserContext();

    // Display loading if the context values are not ready
    if (!name) return <p>Loading...</p>;
    if (!email) return <p>Loading...</p>;

    // Function to update the context values
    const onForgotPassword = () => {
        // Updating the store here by calling onForgot with new values
        onForgot("sachin", "sachin2@gmail.com");
    };

    return (
        <div>
            <p>Component C</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            {/* Button to trigger context update */}
            <Button onClick={onForgotPassword} text="Forgot Password !!" />
            <button onClick={() => alert('Clicked C')}>Click me</button>
        </div>
    );
};

export default C;
