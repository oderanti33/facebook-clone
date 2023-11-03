import React from 'react';
import './MarketCard.css';

function MarketCard(props) {
    const { image, price, details, location } = props
    return (
        <div className='marketCardContainer'>
            <img src={image} alt={details} />
            <div className='marketCardDetail'>
                <h4>
                    {price}
                </h4>
                <h5>
                    {details}
                </h5>
                <h6>
                    {location}
                </h6>
            </div>
        </div>
    )
}

export default MarketCard