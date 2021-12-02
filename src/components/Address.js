import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function searchByPostalCode(postalCode) {
    return axios
        .get(`https://developers.onemap.sg/commonapi/search?searchVal=${postalCode}&returnGeom=N&getAddrDetails=Y`)
        .then(function (response) {
            if (response.data.found === 0) {
                throw new Error(`No Result Found! Postal Code: ${postalCode}`);
            }
            return response.data.results[0]['ADDRESS'];
        });
}

function Address() {
    const [postalCode, setPostalCode] = React.useState();
    const [isLoading, setIsLoading] = React.useState(false);
    const [address, setAddress] = React.useState();
    const [unitNumber, setUnitNumber] = React.useState();

    function getAddressFromPostalCode() {
        setIsLoading(true);
        searchByPostalCode(postalCode)
            .then(setAddress)
            .catch(function (error) {
                alert(error.message);
            })
            .finally(function () {
                setIsLoading(false);
            });
    }

    return (
        <div>
            <h1>Address</h1>
            <p>
                <label>Postal Code: </label>
                <input
                    value={postalCode}
                    onChange={function (e) {
                        setPostalCode(e.target.value);
                    }}
                    type="text"
                />
            </p>
            <p>
                <label>Unit Number: </label>
                <input
                    value={unitNumber}
                    onChange={function (e) {
                        setUnitNumber(e.target.value);
                    }}
                    type="text"
                />
            </p>
            <p>
                <button onClick={getAddressFromPostalCode} disabled={!postalCode || !unitNumber || isLoading}>
                    Search
                </button>
            </p>
            <h2>Search Result</h2>
            <p>{address || '-- Search by Postal Code --'}</p>
            <p>
                <Link
                    to="/order"
                    state={{
                        address: address,
                        unitNumber: unitNumber,
                    }}
                >
                    <button disabled={!address || !unitNumber}>Next {'>>'}</button>
                </Link>
            </p>
        </div>
    );
}

export default Address;
