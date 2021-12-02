import React from 'react';
import { useLocation } from 'react-router-dom';

function Checkout(props) {
    const location = useLocation();
    return (
        <div>
            <h1>Checkout</h1>
            <h2>Address</h2>
            <ul>
                <li>{location.state.address}</li>
                <li>{location.state.unitNumber}</li>
            </ul>
            <h2>Order</h2>
            <ul>
                <li>{location.state.order}</li>
                <li>Upsize? {location.state.upsize ? 'Yes' : 'No'}</li>
                <li>{location.state.drink}</li>
            </ul>
        </div>
    );
}
export default Checkout;
