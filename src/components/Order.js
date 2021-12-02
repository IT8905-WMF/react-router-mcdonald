import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const orders = [
    {
        title: 'McSpicy',
        image: 'https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04044056/product-mcspicy-350x350.png',
    },
    {
        title: 'Double Filet-o-Fish',
        image: 'https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04033439/product-double-filet-o-fish-350x350.png',
    },
    {
        title: 'Chicken McCrispy (6pcs)',
        image: 'https://d1nqx6es26drid.cloudfront.net/app/uploads/2020/11/02110512/SOK-iconsUpright-bucket.png',
    },
    {
        title: 'Grilled Chicken McWrap',
        image: 'https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04043135/product-skinless-grilled-chicken-mcwrap-350x350.png',
    },
];

const drinks = ['Milo', 'Coke', 'Pepsi', 'Orange Juice'];

function Order(props) {
    const location = useLocation();
    const [order, setOrder] = React.useState();
    const [drink, setDrink] = React.useState();
    const [upsize, setUpsize] = React.useState(false);
    const [imgSrc, setImgSrc] = React.useState('https://d1nqx6es26drid.cloudfront.net/app/assets/img/logo_mcd.png');

    let nextState = {};
    if (order) {
        nextState = {
            order: orders[order].title,
            upsize: upsize,
            drink: drink,
            ...location.state,
        };
    }

    return (
        <div>
            <h1>Place Order</h1>
            <select
                onChange={function (e) {
                    setOrder(e.target.value);
                    setImgSrc(orders[+e.target.value].image);
                }}
            >
                <option disabled selected>
                    Select Order
                </option>
                {orders.map(function (order, index) {
                    return <option value={index}>{order.title}</option>;
                })}
            </select>
            <input
                type="checkbox"
                checked={upsize}
                onChange={function (e) {
                    setUpsize(e.target.checked);
                }}
            />
            <label> Upsize? </label>
            <div>
                <select
                    onChange={function (e) {
                        setDrink(e.target.value);
                    }}
                >
                    <option disabled selected>
                        Select Drink
                    </option>
                    {drinks.map(function (drink) {
                        return <option value={drink}>{drink}</option>;
                    })}
                </select>
            </div>
            <p>
                <img alt="" src={imgSrc}></img>
            </p>
            <p>
                <Link to="/checkout" state={nextState}>
                    <button disabled={!order}>Confirm</button>
                </Link>
            </p>
        </div>
    );
}
export default Order;
