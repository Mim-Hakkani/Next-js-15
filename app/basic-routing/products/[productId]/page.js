'use client'
import React from 'react';

const DynamicProductPage = ({params,searchParams}) => {

    return (
        <div>
            <h1>This is the Dynamic Procut page {params.productId}</h1>
            <h1>This is the Dynamic Procut page {searchParams?.name}</h1>
        </div>
    );
};

export default DynamicProductPage;