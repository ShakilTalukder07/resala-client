import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {

    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h3 className="text-3xl font-bold">Make Payment</h3>
        </div>
    );
};

export default Payment;