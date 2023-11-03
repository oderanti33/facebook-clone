import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Component/Carousal.css'

function Carousal() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='deji'>
            <h1>you are welcom Home</h1>
            <div className='tunde'>
                <Carousel
                    responsive={responsive}
                >
                    <div>Item 1</div>
                    <div>Item 1</div>
                    <div>Item 1</div>
                    <div>Item 1</div>
                    <div>Item 1</div>
                    <div>Item 1</div>
                    <div>Item 1</div>
                </Carousel>
            </div>

        </div>

    )
}

export default Carousal